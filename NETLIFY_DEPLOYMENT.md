# Netlify Deployment Guide

This guide will help you deploy the Overcoming Cancer Guidebook to Netlify with working Stripe donations.

## Prerequisites

- A [Netlify account](https://app.netlify.com/signup) (free)
- A [Stripe account](https://stripe.com) (free)
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Step 1: Get Your Stripe API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Click **Developers** → **API keys**
3. Copy both keys:
   - **Publishable key** (starts with `pk_test_`)
   - **Secret key** (starts with `sk_test_`)

⚠️ **Important**: Keep your secret key private!

## Step 2: Deploy to Netlify

### Option A: Deploy via Netlify UI (Recommended)

1. Go to [Netlify](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your Git provider (GitHub, GitLab, or Bitbucket)
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Functions directory**: `netlify/functions` (should auto-detect)
6. Click **"Deploy site"**

### Option B: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
netlify deploy --prod
```

## Step 3: Configure Environment Variables

After your site is deployed:

1. Go to your site's dashboard on Netlify
2. Click **Site settings** → **Environment variables**
3. Click **"Add a variable"** and add:
   - **Key**: `VITE_STRIPE_PUBLISHABLE_KEY`
   - **Value**: Your Stripe publishable key (pk_test_...)
   
4. Add another variable:
   - **Key**: `STRIPE_SECRET_KEY`
   - **Value**: Your Stripe secret key (sk_test_...)

5. Click **"Save"**

6. **Important**: Redeploy your site for the environment variables to take effect:
   - Go to **Deploys** tab
   - Click **"Trigger deploy"** → **"Deploy site"**

## Step 4: Test the Donation Feature

1. Visit your deployed site
2. Click the floating heart button (bottom right)
3. Select a donation amount
4. Click **"Donate"**
5. You should be redirected to Stripe Checkout

### Test with Stripe Test Cards

Use these test card numbers:
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- Use any future expiration date, any 3-digit CVC, and any ZIP code

## Step 5: Go Live (When Ready)

⚠️ **Before accepting real payments:**

1. Complete your Stripe account verification
2. Replace test keys with live keys in Netlify environment variables:
   - `VITE_STRIPE_PUBLISHABLE_KEY` → `pk_live_...`
   - `STRIPE_SECRET_KEY` → `sk_live_...`
3. Redeploy your site
4. Test thoroughly with real (small) donations

## Troubleshooting

### Donation button shows error

**Check:**
1. Environment variables are set correctly in Netlify
2. You redeployed after adding environment variables
3. Stripe keys are valid (check Stripe Dashboard)

### "Function not found" error

**Check:**
1. `netlify.toml` is in the root directory
2. Functions are in `netlify/functions/` directory
3. Redeploy the site

### CORS errors

The function includes CORS headers, but if you still see errors:
1. Check browser console for specific error
2. Verify the API endpoint URL is correct
3. Check Netlify function logs: **Functions** tab in Netlify dashboard

### Check Function Logs

1. Go to your Netlify site dashboard
2. Click **Functions** tab
3. Click on `create-checkout-session`
4. View recent invocations and logs

## Local Development with Netlify Functions

To test functions locally:

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Create a `.env` file with your Stripe keys (see `.env.example`)

3. Run the dev server:
```bash
netlify dev
```

This will:
- Start your Vite dev server
- Run Netlify functions locally
- Make functions available at `http://localhost:8888/.netlify/functions/`

## Custom Domain (Optional)

To use your own domain:

1. Go to **Domain settings** in Netlify
2. Click **"Add custom domain"**
3. Follow the instructions to configure DNS

## Support

- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- [Stripe Documentation](https://stripe.com/docs)

---

**Your site is now live with working donations! 🎉**
