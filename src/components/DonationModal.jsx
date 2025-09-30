import React, { useState } from 'react'
import { X, Heart, DollarSign, CreditCard, CheckCircle } from 'lucide-react'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

// Load Stripe with your publishable key from environment variables
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_YOUR_PUBLISHABLE_KEY_HERE')

// Card element styling
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
      fontFamily: 'system-ui, -apple-system, sans-serif',
    },
    invalid: {
      color: '#9e2146',
    },
  },
}

// Payment form component that uses Stripe Elements
const DonationForm = ({ amount, customAmount, showCustomInput, onSuccess, onClose }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)
    setError(null)

    try {
      const donationAmount = showCustomInput ? parseFloat(customAmount) : amount

      // Create payment intent on the backend
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: donationAmount,
          email: email,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to create payment intent')
      }

      const { clientSecret } = await response.json()

      // Confirm the payment
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            email: email,
          },
        },
      })

      if (stripeError) {
        setError(stripeError.message)
      } else if (paymentIntent.status === 'succeeded') {
        onSuccess()
      }
    } catch (err) {
      console.error('Payment error:', err)
      setError(err.message || 'An error occurred processing your payment')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email Input */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none"
        />
      </div>

      {/* Card Element */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Card Information
        </label>
        <div className="border-2 border-gray-300 rounded-lg p-4 focus-within:border-primary-600 transition-colors">
          <CardElement options={CARD_ELEMENT_OPTIONS} />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
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
    </form>
  )
}

const DonationModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState(5)
  const [customAmount, setCustomAmount] = useState('')
  const [showCustomInput, setShowCustomInput] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const suggestedAmounts = [5, 10, 25, 50, 100]

  const handleSuccess = () => {
    setShowSuccess(true)
  }

  const handleClose = () => {
    setShowSuccess(false)
    onClose()
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors touch-manipulation"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 sm:gap-3 text-white pr-10">
            <Heart className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" fill="currentColor" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Support Our Work</h2>
              <p className="text-primary-100 text-xs sm:text-sm">Your generosity helps us help others</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
            This guidebook is a gift for anyone who needs it. If your heart is stirred and you would 
            like to give a financial gift as a thank you for the hundreds of hours of research that 
            went into creating this resource, we are deeply grateful.
          </p>

          {/* Amount Selection */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
              Select Donation Amount
            </label>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3">
              {suggestedAmounts.map((suggestedAmount) => (
                <button
                  key={suggestedAmount}
                  onClick={() => handleAmountSelect(suggestedAmount)}
                  className={`py-2.5 sm:py-3 px-2 sm:px-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 touch-manipulation ${
                    amount === suggestedAmount && !showCustomInput
                      ? 'bg-primary-600 text-white shadow-lg sm:scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
                  }`}
                >
                  ${suggestedAmount}
                </button>
              ))}
              <button
                onClick={handleCustomAmount}
                className={`py-2.5 sm:py-3 px-2 sm:px-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 touch-manipulation ${
                  showCustomInput
                    ? 'bg-primary-600 text-white shadow-lg sm:scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
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
                  inputMode="decimal"
                  min="1"
                  step="0.01"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full pl-10 pr-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none"
                />
              </div>
            )}
          </div>

          {/* Payment Form or Success Message */}
          {showSuccess ? (
            <div className="text-center py-6 sm:py-8">
              <CheckCircle className="w-14 h-14 sm:w-16 sm:h-16 text-green-500 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2">
                Your donation has been processed successfully. We are deeply grateful for your support.
              </p>
              <button
                onClick={handleClose}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 active:bg-primary-800 transition-colors touch-manipulation"
              >
                Close
              </button>
            </div>
          ) : (
            <Elements stripe={stripePromise}>
              <DonationForm
                amount={amount}
                customAmount={customAmount}
                showCustomInput={showCustomInput}
                onSuccess={handleSuccess}
                onClose={onClose}
              />
            </Elements>
          )}

          {/* Alternative Payment Methods */}
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
            <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3 text-center">
              Or donate directly via:
            </p>
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-gray-700">
                <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-600" />
                <span className="text-xs sm:text-sm">Cashapp:</span>
                <span className="font-semibold text-primary-600 text-xs sm:text-sm">$lesliehairfield</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-gray-700">
                <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-600" />
                <span className="text-xs sm:text-sm">Venmo:</span>
                <span className="font-semibold text-primary-600 text-xs sm:text-sm">@adamhairfield</span>
              </div>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="mt-4 sm:mt-6 bg-primary-50 rounded-lg p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline text-primary-600" fill="currentColor" /> Thank you for your generosity! 
              Your support helps us continue to provide this resource freely to those who need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonationModal
