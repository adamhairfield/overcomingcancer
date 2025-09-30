// Example backend API endpoint for creating Stripe Checkout Sessions
// This can be deployed to Vercel, Netlify Functions, or your own backend

// Install: npm install stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports = async (req, res) => {
  // Enable CORS if needed
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { amount } = req.body

    // Validate amount
    if (!amount || amount < 1) {
      return res.status(400).json({ error: 'Invalid amount' })
    }

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
              images: ['https://your-domain.com/logo.png'], // Optional: Add your logo
            },
            unit_amount: Math.round(amount * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin || 'http://localhost:5173'}?donation=success`,
      cancel_url: `${req.headers.origin || 'http://localhost:5173'}?donation=cancelled`,
      metadata: {
        type: 'donation',
        guidebook: 'overcoming-cancer',
      },
    })

    res.status(200).json({ id: session.id })
  } catch (error) {
    console.error('Stripe error:', error)
    res.status(500).json({ error: error.message })
  }
}
