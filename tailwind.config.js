/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "navbar-bg": "var(--bg-navbar-color)",
                "navbar-text": "var(--text-navbar-color)",
                "home-bg": "var(--bg-home-color)",
                "page-bg": "var(--bg-page-color)"
            },
        },
        fontFamily: {
            playfair: ["Playfair Display", "serif"],
            roboto: ["Roboto", "sans-serif"],
        },
        backgroundImage: {
            'home-img': "url('/src/assets/home_asset.jpg')",
        }
    },
    plugins: [],
}

