# Netflix Clone - Next.js + Tailwind CSS

This is a Netflix clone built with Next.js 14 (App Router) and Tailwind CSS.

## Features

- 🎬 Browse movies from The Movie Database (TMDB) API
- 🔐 Firebase Authentication (Sign Up / Sign In)
- 🎥 Watch movie trailers
- 📱 Responsive design with Tailwind CSS
- ⚡ Server-side rendering with Next.js

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Firebase account
- TMDB API key

### Installation

1. Clone the repository

2. Install dependencies:
```bash
npm install
```

3. Configure Firebase:
   - Update the Firebase config in `lib/firebase.js` with your Firebase project credentials

4. Configure TMDB API:
   - Get your API key from [TMDB](https://www.themoviedb.org/settings/api)
   - Update the Authorization Bearer token in `components/TitleCards.jsx` and `app/player/[id]/page.jsx`

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Authentication:** Firebase Auth
- **Database:** Firestore
- **API:** The Movie Database (TMDB)
- **Notifications:** React Toastify

## Project Structure

```
├── app/
│   ├── layout.jsx          # Root layout with auth provider
│   ├── page.jsx            # Home page
│   ├── globals.css         # Global styles with Tailwind
│   ├── login/
│   │   └── page.jsx        # Login/signup page
│   └── player/
│       └── [id]/
│           └── page.jsx    # Video player page
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   ├── Footer.jsx          # Footer component
│   └── TitleCards.jsx      # Movie cards carousel
├── lib/
│   ├── firebase.js         # Firebase config and auth functions
│   └── AuthContext.jsx     # Auth context provider
├── public/
│   └── assets/             # Static assets (images, icons)
└── tailwind.config.js      # Tailwind configuration
```

## License

This project is for educational purposes only.
