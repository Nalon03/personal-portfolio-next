'use client'

import React from 'react'

interface HeaderProps {
  title?: string
  className?: string
}

const Header: React.FC<HeaderProps> = ({ title = 'Portfolio', className = '' }) => {
  return (
    <header className={`bg-white shadow-sm border-b border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-500 hover:text-gray-900">Home</a>
            <a href="/about" className="text-gray-500 hover:text-gray-900">About</a>
            <a href="/projects" className="text-gray-500 hover:text-gray-900">Projects</a>
            <a href="/contact" className="text-gray-500 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

