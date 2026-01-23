import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const rateLimitMap = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 3

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  honeypot?: string
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (realIP) {
    return realIP
  }
  
  return 'unknown'
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const record = rateLimitMap.get(ip)
  
  if (rateLimitMap.size > 1000) {
    Array.from(rateLimitMap.entries()).forEach(([key, value]) => {
      if (now - value.timestamp > RATE_LIMIT_WINDOW) {
        rateLimitMap.delete(key)
      }
    })
  }
  
  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now })
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1 }
  }
  
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, remaining: 0 }
  }
  
  record.count++
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - record.count }
}

function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request)
    
    const { allowed, remaining } = checkRateLimit(clientIP)
    
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'Retry-After': '3600'
          }
        }
      )
    }

    const body: ContactFormData = await request.json()
    const { name, email, subject, message, honeypot } = body

    if (honeypot && honeypot.length > 0) {
      return NextResponse.json(
        { message: 'Email sent successfully', id: 'filtered' },
        { status: 200 }
      )
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    if (name.length > 100 || email.length > 100 || subject.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Input exceeds maximum length' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const contactEmail = process.env.CONTACT_EMAIL

    if (!contactEmail) {
      console.error('CONTACT_EMAIL environment variable is not set')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const safeName = sanitizeInput(name)
    const safeEmail = sanitizeInput(email)
    const safeSubject = sanitizeInput(subject)
    const safeMessage = sanitizeInput(message)

    const submittedAt = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    })

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [contactEmail],
      subject: `Portfolio Contact: ${safeSubject}`,
      replyTo: email,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #08203A;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #08203A;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        
        <!-- Main Container -->
        <table width="560" cellpadding="0" cellspacing="0" border="0" style="background-color: #0d2847; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 28px 32px; border-bottom: 1px solid rgba(255,255,255,0.1);">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <h1 style="margin: 0; color: #06b6d4; font-size: 20px; font-weight: 600; letter-spacing: -0.3px;">New Message</h1>
                    <p style="margin: 6px 0 0 0; color: rgba(255,255,255,0.5); font-size: 13px;">Someone reached out through your portfolio</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                
                <!-- From Field -->
                <tr>
                  <td style="padding-bottom: 24px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="80" valign="top" style="color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 500; padding-top: 2px;">From</td>
                        <td style="color: #ffffff; font-size: 15px;">
                          <strong style="font-weight: 600;">${safeName}</strong><br>
                          <a href="mailto:${safeEmail}" style="color: #06b6d4; text-decoration: none; font-size: 14px;">${safeEmail}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Subject Field -->
                <tr>
                  <td style="padding-bottom: 24px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="80" valign="top" style="color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 500; padding-top: 2px;">Subject</td>
                        <td style="color: #ffffff; font-size: 15px;">${safeSubject}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Message Field -->
                <tr>
                  <td>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="80" valign="top" style="color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 500; padding-top: 14px;">Message</td>
                        <td>
                          <div style="background-color: rgba(255,255,255,0.04); border-radius: 10px; padding: 16px 18px; border: 1px solid rgba(255,255,255,0.08);">
                            <p style="margin: 0; color: rgba(255,255,255,0.85); font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${safeMessage}</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: rgba(0,0,0,0.15); border-top: 1px solid rgba(255,255,255,0.08); border-radius: 0 0 16px 16px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="color: rgba(255,255,255,0.4); font-size: 12px;">
                    ${submittedAt}
                  </td>
                  <td align="right" style="color: rgba(255,255,255,0.3); font-size: 11px;">
                    Portfolio Contact Form
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
        
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Remaining': remaining.toString()
        }
      }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
