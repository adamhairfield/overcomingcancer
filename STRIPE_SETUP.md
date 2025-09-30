# Stripe Integration Setup Guide

This guide will help you set up Stripe payments for the donation feature.

## Prerequisites

- A Stripe account (sign up at [stripe.com](https://stripe.com))
- Node.js installed
- A deployment platform (Vercel, Netlify, or your own server)

## Step 1: Get Your Stripe API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Click on **Developers** in the left sidebar
3. Click on **API keys**
4. You'll see two keys:
   - **Publishable key** (starts with `pk_test_` for test mode or `pk_live_` for live mode)
   - **Secret key** (starts with `sk_test_` for test mode or `sk_live_` for live mode)

⚠️ **Important**: Never expose your secret key in client-side code!

## Step 2: Configure Environment Variables

### For Local Development

1. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

2. Edit `.env` and add your keys:
```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
```

### For Production (Vercel)

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add the following variables:
   - `VITE_STRIPE_PUBLISHABLE_KEY` = your publishable key
   - `STRIPE_SECRET_KEY` = your secret key

### For Production (Netlify)

1. Go to your Netlify site settings
2. Navigate to **Build & deploy** → **Environment**
3. Add the same environment variables as above

## Step 3: Deploy the Backend API

The backend API is located in `/api/create-checkout-session.js`.

### Option A: Deploy to Vercel (Recommended)

Vercel automatically detects and deploys serverless functions from the `/api` directory.

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. The API will be available at: `https://your-domain.vercel.app/api/create-checkout-session`

### Option B: Deploy to Netlify

1. Create a `netlify.toml` file in the root:
```toml
[build]
  functions = "api"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

2. Deploy using Netlify CLI or connect your Git repository

### Option C: Use Your Own Backend

If you have your own backend server:

1. Install Stripe SDK:
```bash
npm install stripe
```

2. Copy the code from `/api/create-checkout-session.js` to your backend
3. Create an endpoint at `/api/create-checkout-session`
4. Update the API URL in `DonationModal.jsx` if needed

## Step 4: Test the Integration

### Test Mode

1. Use test API keys (starting with `pk_test_` and `sk_test_`)
2. Use Stripe's [test card numbers](https://stripe.com/docs/testing):
   - **Success**: `4242 4242 4242 4242`
   - **Decline**: `4000 0000 0000 0002`
   - Use any future expiration date, any 3-digit CVC, and any ZIP code

3. Test the donation flow:
   - Click the floating heart button
   - Select an amount
   - Click "Donate"
   - Complete the test payment

### Live Mode

⚠️ **Before going live:**

1. Replace test keys with live keys (starting with `pk_live_` and `sk_live_`)
2. Complete Stripe account verification
3. Set up your business details in Stripe Dashboard
4. Configure email receipts in Stripe Dashboard
5. Test thoroughly in production

## Step 5: Customize (Optional)

### Change Suggested Amounts

Edit `src/components/DonationModal.jsx`:
```javascript
const suggestedAmounts = [5, 10, 25, 50, 100] // Change these values
```

### Change Success/Cancel URLs

Edit `api/create-checkout-session.js`:
```javascript
success_url: `${req.headers.origin}?donation=success`,
cancel_url: `${req.headers.origin}?donation=cancelled`,
```

### Add Success/Cancel Messages

You can add URL parameter detection in your app to show success/cancel messages:

```javascript
// In App.jsx or a new component
useEffect(() => {
  const params = new URLSearchParams(window.location.search)
  if (params.get('donation') === 'success') {
    alert('Thank you for your donation!')
  }
}, [])
```

## Troubleshooting

### "Invalid API Key" Error
- Make sure your API keys are correct
- Ensure you're using the right environment (test vs live)
- Check that environment variables are properly set

### CORS Errors
- Make sure your backend API has CORS headers enabled
- Check that the API URL is correct

### Payment Not Processing
- Check browser console for errors
- Verify Stripe keys are loaded correctly
- Ensure the backend API is deployed and accessible

### Testing Locally
- The API endpoint needs to be deployed to work
- For local testing, you can use Stripe CLI to forward webhooks:
```bash
stripe listen --forward-to localhost:3000/api/create-checkout-session
```

## Security Best Practices

1. ✅ Never commit `.env` files to Git
2. ✅ Always use environment variables for API keys
3. ✅ Keep secret keys on the server side only
4. ✅ Use HTTPS in production
5. ✅ Validate amounts on the backend
6. ✅ Set up Stripe webhooks for payment confirmations

## Additional Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Checkout Guide](https://stripe.com/docs/payments/checkout)
- [Stripe Testing](https://stripe.com/docs/testing)
- [Stripe Security](https://stripe.com/docs/security)

## Support

If you need help with Stripe integration:
- [Stripe Support](https://support.stripe.com)
- [Stripe Community](https://stripe.com/community)

---

**Note**: This integration uses Stripe Checkout, which is PCI compliant and handles all payment details securely. You never handle sensitive card information directly.
