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
            },
        },
    },
    plugins: [],
}

