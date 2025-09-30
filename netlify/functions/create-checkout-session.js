// Netlify serverless function for creating Stripe Checkout Sessions
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.handler = async (event, context) => {
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
    const { amount } = JSON.parse(event.body)

    // Validate amount
    if (!amount || amount < 1) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid amount' }),
      }
    }

    // Get the origin from the request headers
    const origin = event.headers.origin || event.headers.referer || 'https://your-site.netlify.app'

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Donation to Overcoming Cancer Guidebook',
              description: 'Thank you for supporting our work in helping others fight cancer',
            },
            unit_amount: Math.round(amount * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}?donation=success`,
      cancel_url: `${origin}?donation=cancelled`,
      metadata: {
        type: 'donation',
        guidebook: 'overcoming-cancer',
      },
    })

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ id: session.id }),
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
