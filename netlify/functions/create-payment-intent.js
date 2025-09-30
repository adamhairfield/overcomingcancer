// Netlify serverless function for creating Stripe Payment Intents

exports.handler = async (event, context) => {
  // Initialize Stripe inside the handler to catch errors
  if (!process.env.STRIPE_SECRET_KEY) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: JSON.stringify({ error: 'Stripe secret key not configured' }),
    }
  }

  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
  
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    }
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const { amount, email } = JSON.parse(event.body)

    // Validate amount
    if (!amount || amount < 1) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid amount' }),
      }
    }

    // Create Payment Intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      receipt_email: email,
      description: 'Donation to Overcoming Cancer Guidebook',
      metadata: {
        type: 'donation',
        guidebook: 'overcoming-cancer',
      },
    })

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        clientSecret: paymentIntent.client_secret 
      }),
    }
  } catch (error) {
    console.error('Stripe error:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message }),
    }
  }
}
