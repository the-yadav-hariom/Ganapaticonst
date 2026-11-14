# Core Craft Technologies - Full Website & Service

A responsive website built with **React.js** and **Tailwind CSS** for **Core Craft Technologies**, matching all sections from the design screenshots.

---

## Project Structure

```
constru/
├── client/                     # Frontend Application (React + Tailwind CSS)
│   ├── images/                 # High-resolution assets cropped from design
│   ├── public/images/          # Public static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx      # Sticky header with logo, navigation & quote button
│   │   │   ├── Hero.jsx        # Headline & CTA over construction site at dusk
│   │   │   ├── About.jsx       # Delivering Smarter Engineering Solutions
│   │   │   ├── Industries.jsx  # 8 Sector Cards with custom vector icons
│   │   │   ├── Services.jsx    # 6 Service Cards (BIM, VDC, Offshore, etc.)
│   │   │   ├── WhyChoose.jsx   # Green card overlay on crane background
│   │   │   ├── Testimonials.jsx# Client review with interactive dots slider
│   │   │   ├── CTA.jsx         # "Let's Build Something Exceptional Together"
│   │   │   ├── Footer.jsx      # Contact (+91 9136226996), office address, and logo
│   │   │   └── QuoteModal.jsx  # Interactive consultation & quote dialog
│   │   ├── App.jsx             # Main application orchestrator
│   │   ├── main.jsx            # React root mount
│   │   └── index.css           # Tailwind & typography configuration
│   ├── index.html              # Vite entry point
│   ├── preview.html            # Standalone browser-ready version (Instant preview)
│   ├── tailwind.config.js      # Tailwind design system configuration
│   └── vite.config.js          # Vite build & dev configuration
│
└── service/                    # Backend API & Server
    ├── server.js               # Node.js service (API endpoints + static server)
    ├── package.json            # Service scripts
    └── quotes.json             # Stores submitted quotes and contact requests
```

---

## How to Run & View

### Option 1: Instant Browser Preview (Zero Setup Needed)
Simply double-click or open `client/preview.html` in your browser (Google Chrome, Microsoft Edge, etc.):
```powershell
Start-Process "client\preview.html"
```
This gives you an immediate live preview of the complete website with all sections, responsive design, interactive modal, and animations!

---

### Option 2: Run the Backend Service
The backend service is built with native Node.js (no extra packages needed to install):
```powershell
cd service
node server.js
```
Then open your browser to:
**[http://localhost:5000](http://localhost:5000)**

Available API Endpoints:
- `GET  /api/health` - Service health status
- `GET  /api/quotes` - List all submitted quote requests
- `POST /api/quote`  - Submit new quote request (persisted to `quotes.json`)

---

### Option 3: Run with Vite & React Development Server
Inside `client`:
```powershell
cd client
npm install
npm run dev
```
Runs the Vite development server with Hot Module Replacement (HMR) on `http://localhost:3000`.

---

## Included Sections & Design Highlights

1. **Header & Navigation**: Brand cube logo, navigation links (`Home`, `About Us`, `Services`, `Contact Us`), and `Request A Quote` action.
2. **Hero Section**: `Powering Modern Construction with Engineering Expertise` over tower cranes at dusk with `Start Your Project Today →`.
3. **About Core Craft Technologies**: Team blueprint review photo and corporate story on intelligent engineering solutions.
4. **Industries We Serve**: 8 sectors: Commercial Buildings, Residential Projects, Healthcare Facilities, Hospitality & Hotels, Airports & Aviation, Industrial Facilities, Infrastructure Projects, and Data Centers.
5. **Our Services**: 6 cards with photos for BIM Services, VDC Services, Offshore Engineering Support, Technical Staffing, CAD Drafting & Documentation, and Scan to BIM.
6. **Why Choose Core Craft Technologies**: Forest green overlay card highlighting Industry Expertise, Quality & Precision, Risk Reduction, and End-to-End Support.
7. **What Our Clients Say**: Client project testimonial from India with interactive carousel indicator dots.
8. **Call To Action**: `Let's Build Something Exceptional Together` floating banner over city skyline.
9. **Footer**: Office address (Mishan Mahadewa, Siwan, Bihar 841226, India), contact number (+91 9136226996), email contacts (info@ganapatiganeshconstruction.com, piyush.k@ganapatiganeshconstruction.com), and corporate credentials.
10. **Interactive Modal**: Functional quote submission form with field validation and backend synchronization.

