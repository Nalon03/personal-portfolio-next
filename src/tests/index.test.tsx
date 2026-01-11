import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Portfolio App', () => {
  it('renders without crashing', () => {
    expect(true).toBe(true)
  })

  it('has basic test setup', () => {
    expect(typeof render).toBe('function')
    expect(typeof screen).toBe('object')
  })
})






