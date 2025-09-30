import React, { useState, useEffect } from 'react'
import { Menu, X, Heart } from 'lucide-react'

const Header = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'protocol', label: 'Protocol', href: '#protocol' },
    { id: 'supplements', label: 'Supplements', href: '#supplements' },
    { id: 'nutrition', label: 'Nutrition', href: '#nutrition' },
    { id: 'meal-plan', label: 'Meal Plan', href: '#meal-plan' },
    { id: 'resources', label: 'Resources', href: '#resources' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Heart className="w-6 h-6 text-primary-600" fill="currentColor" />
            <span className="text-xl font-bold text-gray-900">
              Overcoming Cancer Guidebook
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                onClick={() => {
                  setActiveSection(item.id)
                  setIsMobileMenuOpen(false)
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
