import React, { useState } from 'react'
import { X, Heart, DollarSign, CreditCard } from 'lucide-react'
import { loadStripe } from '@stripe/stripe-js'

// Load Stripe with your publishable key from environment variables
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_YOUR_PUBLISHABLE_KEY_HERE')

const DonationModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState(5)
  const [customAmount, setCustomAmount] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [showCustomInput, setShowCustomInput] = useState(false)

  const suggestedAmounts = [5, 10, 25, 50, 100]

  const handleDonation = async () => {
    setIsProcessing(true)
    
    try {
      const stripe = await stripePromise
      
      // In a real implementation, you would:
      // 1. Call your backend API to create a Stripe Checkout Session
      // 2. Redirect to Stripe Checkout
      
      // Example backend call:
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: showCustomInput ? parseFloat(customAmount) : amount,
        }),
      })
      
      // Check if the response is ok before parsing JSON
      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Server error: ${response.status}. ${errorText || 'Backend API not available.'}`)
      }
      
      const session = await response.json()
      
      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      })
      
      if (result.error) {
        alert(result.error.message)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('There was an error processing your donation. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleAmountSelect = (selectedAmount) => {
    setAmount(selectedAmount)
    setShowCustomInput(false)
    setCustomAmount('')
  }

  const handleCustomAmount = () => {
    setShowCustomInput(true)
    setAmount(0)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-6 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3 text-white">
            <Heart className="w-8 h-8" fill="currentColor" />
            <div>
              <h2 className="text-2xl font-bold">Support Our Work</h2>
              <p className="text-primary-100 text-sm">Your generosity helps us help others</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-700 mb-6 leading-relaxed">
            This guidebook is a gift for anyone who needs it. If your heart is stirred and you would 
            like to give a financial gift as a thank you for the hundreds of hours of research that 
            went into creating this resource, we are deeply grateful.
          </p>

          {/* Amount Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Select Donation Amount
            </label>
            <div className="grid grid-cols-3 gap-3 mb-3">
              {suggestedAmounts.map((suggestedAmount) => (
                <button
                  key={suggestedAmount}
                  onClick={() => handleAmountSelect(suggestedAmount)}
                  className={`py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                    amount === suggestedAmount && !showCustomInput
                      ? 'bg-primary-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  ${suggestedAmount}
                </button>
              ))}
              <button
                onClick={handleCustomAmount}
                className={`py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  showCustomInput
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Custom
              </button>
            </div>

            {/* Custom Amount Input */}
            {showCustomInput && (
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  min="1"
                  step="0.01"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none"
                />
              </div>
            )}
          </div>

          {/* Donation Button */}
          <button
            onClick={handleDonation}
            disabled={isProcessing || (showCustomInput && !customAmount)}
            className="w-full bg-primary-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2"
          >
            {isProcessing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5" />
                Donate ${showCustomInput ? customAmount || '0' : amount}
              </>
            )}
          </button>

          {/* Alternative Payment Methods */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-900 mb-3 text-center">
              Or donate directly via:
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <DollarSign className="w-4 h-4 text-primary-600" />
                <span className="text-sm">Cashapp:</span>
                <span className="font-semibold text-primary-600">$lesliehairfield</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <DollarSign className="w-4 h-4 text-primary-600" />
                <span className="text-sm">Venmo:</span>
                <span className="font-semibold text-primary-600">@adamhairfield</span>
              </div>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="mt-6 bg-primary-50 rounded-lg p-4">
            <p className="text-sm text-gray-700 text-center">
              <Heart className="w-4 h-4 inline text-primary-600" fill="currentColor" /> Thank you for your generosity! 
              Your support helps us continue to provide this resource freely to those who need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonationModal
