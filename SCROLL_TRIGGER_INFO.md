# Scroll-Triggered Donation Modal

The donation modal now automatically appears when users scroll to the Protocol section.

## How It Works

1. **Intersection Observer** - Watches when the Protocol section becomes visible
2. **Trigger Point** - Modal appears when 30% of the Protocol section is visible
3. **Delay** - 500ms delay after scrolling to ensure smooth experience
4. **Session Tracking** - Uses `sessionStorage` to remember if modal was already shown

## Session Behavior

- ✅ Modal shows **once per browser session**
- ✅ If user closes the modal, it won't show again until they close the browser/tab
- ✅ Tracked via `sessionStorage.getItem('donation_modal_shown')`
- ✅ Resets when browser/tab is closed

## User Experience

1. User scrolls down to the Protocol section
2. When 30% of the section is visible, modal appears after 500ms
3. User can:
   - Donate using the form
   - Close the modal
   - Use alternative payment methods
4. Modal won't appear again this session
5. User can still access donation via:
   - Floating heart button (bottom right)
   - Introduction section button
   - Footer button

## Technical Details

- **Component**: `src/components/Protocol.jsx`
- **Storage Key**: `donation_modal_shown`
- **Storage Type**: `sessionStorage` (clears on browser close)
- **Threshold**: 30% visibility (0.3)
- **Delay**: 500ms

## Customization

### Change Visibility Threshold

Edit the `threshold` value in Protocol.jsx:

```javascript
{
  threshold: 0.3, // 0.3 = 30%, 0.5 = 50%, etc.
}
```

### Change Delay

Edit the `setTimeout` delay:

```javascript
setTimeout(() => {
  setIsModalOpen(true)
  // ...
}, 500) // Change 500 to desired milliseconds
```

### Disable Auto-Popup

Remove or comment out the entire `useEffect` hook in Protocol.jsx, or set the threshold to a very high number like `1.0` (100% visible).

## Benefits

- ✅ Non-intrusive - only shows once
- ✅ Context-aware - appears when viewing protocol content
- ✅ Respectful - remembers user's choice
- ✅ Multiple access points - users can still donate other ways
- ✅ Session-based - fresh experience each visit
