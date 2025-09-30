# Stripe Elements Integration

Your donation modal now uses **Stripe Elements** to embed the payment form directly in the modal, keeping users on your site.

## What Changed

### Before
- Users clicked "Donate" → Redirected to Stripe Checkout page
- Payment happened on Stripe's hosted page
- Users returned to your site after payment

### After
- Users enter card details directly in your modal
- Payment happens without leaving your site
- Success message shows immediately in the modal

## How It Works

1. **User selects amount** → Enters email and card details
2. **Frontend** → Calls `/api/create-payment-intent` to create a Payment Intent
3. **Backend** → Returns a `clientSecret` to the frontend
4. **Frontend** → Uses Stripe.js to confirm the payment with the card details
5. **Success** → Shows thank you message in the modal

## Testing

Use these test card numbers:

- **Success**: `4242 4242 4242 4242`
- **Requires authentication**: `4000 0025 0000 3155`
- **Declined**: `4000 0000 0000 9995`

Use any:
- Future expiration date (e.g., 12/34)
- Any 3-digit CVC (e.g., 123)
- Any ZIP code (e.g., 12345)

## Benefits

✅ **Better UX** - Users stay on your site
✅ **More trust** - No redirect to external page
✅ **Customizable** - Full control over the design
✅ **Secure** - Stripe Elements are PCI compliant
✅ **Mobile friendly** - Works great on all devices

## Files Modified

- `src/components/DonationModal.jsx` - Added Stripe Elements integration
- `netlify/functions/create-payment-intent.js` - New backend function

## Notes

- The old `create-checkout-session.js` function is still there but not used
- You can delete it if you want, or keep it as a backup
- Both test and live keys work the same way
- Stripe automatically sends email receipts to donors
