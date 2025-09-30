# Password Protection

The website is now password protected to ensure privacy and controlled access to the sensitive health information.

## Password

**Current Password:** `Hg@3jlUndoqYtu66`

## How It Works

- Users must enter the correct password to access the guidebook
- Authentication is stored in `sessionStorage` (lasts for the browser session)
- When the browser/tab is closed, users will need to re-enter the password
- The password screen has a clean, professional design matching the site's aesthetic

## Features

- ✅ Show/hide password toggle
- ✅ Error message for incorrect passwords
- ✅ Session-based authentication (no cookies)
- ✅ Mobile-friendly design
- ✅ Auto-focus on password field
- ✅ Accessible with proper labels and ARIA attributes

## Changing the Password

To change the password, edit the `CORRECT_PASSWORD` constant in:
`src/components/PasswordProtection.jsx`

```javascript
const CORRECT_PASSWORD = 'YourNewPasswordHere'
```

## Security Notes

⚠️ **Important**: This is a client-side password protection suitable for basic privacy needs. For production environments with sensitive data, consider:

1. Server-side authentication
2. Encrypted password storage
3. Rate limiting for failed attempts
4. HTTPS (already handled by Netlify)

For this use case (family guidebook), the current implementation provides adequate protection while keeping the site simple and static.

## Removing Password Protection

To remove password protection, simply remove the `<PasswordProtection>` wrapper from `src/App.jsx`:

```javascript
// Before (with password)
return (
  <PasswordProtection>
    <div className="min-h-screen">
      {/* content */}
    </div>
  </PasswordProtection>
)

// After (without password)
return (
  <div className="min-h-screen">
    {/* content */}
  </div>
)
```
