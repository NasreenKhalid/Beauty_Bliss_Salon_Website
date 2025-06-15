# BeautyBliss - Premium Beauty Salon Website

A complete responsive beauty salon website featuring bilingual support (English/Arabic), 3D animated hero section, and Airtable booking integration.

## Features

- **Bilingual Interface** - Full English/Arabic language support with RTL text direction
- **3D Animated Hero** - Spline-inspired floating elements and gradient animations
- **Services Menu** - Professional service cards with pricing (30 SR each)
- **Booking System** - Airtable integration for appointment management
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **WhatsApp Integration** - Direct contact via WhatsApp (0581437287)
- **Opening Hours** - Daily 2:00 PM - 10:00 PM

## Services Offered

1. **Pedicure** - Complete foot care and nail treatment (30 SR)
2. **Manicure** - Professional hand and nail care (30 SR)
3. **Nail Installation** - Artificial nail application and design (30 SR)
4. **Bath Oil for Hair** - Nourishing hair oil treatment (30 SR)
5. **Blonding Face** - Professional facial hair lightening (30 SR)
6. **Waxing up to Knees** - Complete leg hair removal service (30 SR)
7. **Hand Wax up to Arms** - Complete arm hair removal (30 SR)

## File Structure

```
beautybliss-website/
├── index.html          # Main website file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
├── README.md           # This documentation
└── package.json        # Project configuration
```

## Quick Start

### Option 1: Static Hosting (Recommended for Frontend Only)

1. **Upload to any static hosting service:**
   - Netlify
   - Vercel
   - GitHub Pages
   - Firebase Hosting

2. **Simply drag and drop the entire folder or connect your GitHub repository**

3. **The website will work immediately for everything except the booking form**

### Option 2: Full Deployment with Backend

For the booking system to work, you need a backend server. You can either:

1. **Use the existing Replit backend** (if deploying elsewhere, copy the backend code)
2. **Set up your own Node.js backend** with Airtable integration
3. **Use serverless functions** (Netlify Functions, Vercel Functions)

## Customization

### Update Contact Information

Edit these in `index.html` and `script.js`:
- Phone number: Currently `----------`
- WhatsApp link: `https://wa.me/966-------`
- Location: Currently "Riyadh, Saudi Arabia"

### Modify Services

To change services or pricing:
1. Edit the service cards in `index.html` (Services Menu Section)
2. Update the booking form dropdown options
3. Modify Arabic translations as needed

### Change Colors/Branding

Main brand colors in `styles.css`:
- Primary: `#d4577a` (pink)
- Secondary: `#8b45c6` (purple)
- Accent: `#667eea` (blue)

### Language Support

The website supports:
- **English** (left-to-right)
- **Arabic** (right-to-left with proper RTL support)

To add more languages:
1. Add language toggle buttons
2. Add `lang-content` spans with appropriate `data-lang` attributes
3. Update the `switchLanguage()` function in `script.js`

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment Examples


### GitHub Pages

1. Upload files to a GitHub repository
2. Go to Settings > Pages
3. Select source branch
4. Your site will be available at `https://yourusername.github.io/repository-name/`

## Backend Integration (Optional)

If you want the booking form to work, you'll need:

1. **Airtable Setup:**
   - Create an Airtable base
   - Add a "Bookings" table with these fields:
     - Name (Single line text)
     - Phone (Phone number)
     - Email (Email)
     - Service (Single select)
     - Date (Date)
     - Booking_Date (Date)
     - Status (Single select)

2. **Backend Options:**
   - Node.js/Express server
   - Serverless functions
   - Replit hosting (current setup)

3. **API Endpoint:**
   The booking form expects a `POST /api/booking` endpoint

## License

MIT License - Feel free to use for personal and commercial projects.

## Support

For customization or technical support:
- WhatsApp: +966 ---------
- Operating Hours: Daily 2:00 PM - 10:00 PM

---

**Note:** This is a complete, production-ready website. The booking system requires backend setup for full functionality, but the website works perfectly as a static site for showcasing services and contact information.
