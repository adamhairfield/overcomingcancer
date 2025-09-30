# Overcoming Cancer Guidebook - React Website

A beautiful, modern, and responsive React website based on Leslie Hairfield's comprehensive cancer guidebook. This website provides evidence-based protocols, nutritional guidance, and practical tools for those on a healing journey.

## Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- 🎯 **Easy Navigation** - Smooth scrolling and intuitive menu system
- 📚 **Comprehensive Content** - All guidebook information organized into clear sections
- 🔄 **Interactive Components** - Expandable sections, tabs, and dynamic content
- 💳 **Integrated Donations** - Floating donation button with Stripe integration
- ♿ **Accessible** - Built with accessibility best practices

## Sections

1. **Hero** - Introduction and call-to-action
2. **About** - Leslie's story and purpose
3. **Medical Disclaimer** - Important safety information
4. **Protocol** - Ivermectin & Mebendazole/Fenbendazole dosing
5. **Daily Schedule** - Medication and supplement timing
6. **Supplements** - Recommended supplements with dosages
7. **Nutrition** - Foods to eat, avoid, and superfoods
8. **Meal Plan** - Weekly meal planning guide
9. **Ditch That/Use This** - Product swaps for healthier living
10. **Resources** - Articles, podcasts, books, and people to follow

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Stripe** - Secure payment processing for donations

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd /Users/adamhairfield/CascadeProjects/overcoming-cancer-guidebook
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

To create a production-ready build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Stripe Donation Setup

The website includes a floating donation button with Stripe integration. To set it up:

1. **Get Stripe API Keys**: Sign up at [stripe.com](https://stripe.com) and get your API keys
2. **Configure Environment Variables**: Copy `.env.example` to `.env` and add your keys
3. **Deploy Backend API**: The `/api` folder contains the serverless function for Stripe
4. **Full Setup Guide**: See [STRIPE_SETUP.md](STRIPE_SETUP.md) for detailed instructions

**Quick Start for Testing:**
- Use Stripe test keys (starting with `pk_test_` and `sk_test_`)
- Test card: `4242 4242 4242 4242`
- The donation button appears after scrolling down

## Project Structure

```
overcoming-cancer-guidebook/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Introduction.jsx    # About section
│   │   ├── Disclaimer.jsx      # Medical disclaimer
│   │   ├── Protocol.jsx        # Treatment protocol
│   │   ├── DailySchedule.jsx   # Daily supplement schedule
│   │   ├── Supplements.jsx     # Supplement recommendations
│   │   ├── Nutrition.jsx       # Nutrition guide
│   │   ├── MealPlan.jsx        # Weekly meal plan
│   │   ├── DitchThat.jsx              # Product swaps
│   │   ├── Resources.jsx              # Additional resources
│   │   ├── Footer.jsx                 # Footer
│   │   ├── DonationModal.jsx          # Stripe donation modal
│   │   └── FloatingDonationButton.jsx # Floating donation button
│   ├── App.jsx                        # Main app component
│   ├── main.jsx                       # Entry point
│   └── index.css                      # Global styles
├── api/
│   └── create-checkout-session.js     # Stripe serverless function
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── .env.example                       # Environment variables template
├── STRIPE_SETUP.md                    # Stripe setup guide
└── README.md
```

## Customization

### Colors

The primary color scheme uses green tones. To change colors, edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom colors here
  }
}
```

### Content

All content is stored directly in the component files. To update content:

1. Navigate to the appropriate component in `src/components/`
2. Edit the content within the component
3. Save and the changes will hot-reload

## Deployment

This site can be deployed to various platforms:

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Vite and deploy

### Netlify

1. Push your code to GitHub
2. Connect your repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Other Platforms

The built files in the `dist` directory can be deployed to any static hosting service.

## Support

If this guidebook has helped you, consider supporting Leslie's work:

- **Cashapp**: $lesliehairfield
- **Venmo**: @adamhairfield

## Contact

For questions about the guidebook content:
- Email: lesliehairfield@gmail.com

## Disclaimer

This website is for informational purposes only and does not constitute medical advice. Always consult with qualified healthcare providers before making any medical decisions.

## License

This project is created with love for anyone who needs it. Feel free to use and share.

---

Created by Leslie Hairfield with love for her mother and all those fighting cancer. ❤️
