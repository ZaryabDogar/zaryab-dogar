// tailwind.config.js
export default {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                // Primary colors (used for main elements)
                primary: {
                    light: '#4f46e5', // indigo-600
                    dark: '#818cf8',  // indigo-400
                    DEFAULT: '#4f46e5' // default light mode color
                },
                // Secondary colors (used for accents)
                secondary: {
                    light: '#ec4899', // pink-500
                    dark: '#f472b6',  // pink-400
                    DEFAULT: '#ec4899'
                },
                // Background colors
                bg: {
                    light: '#ffffff',
                    dark: '#111827',
                    DEFAULT: '#ffffff'
                },
                // Text colors
                text: {
                    light: '#111827',
                    dark: '#f3f4f6',
                    DEFAULT: '#111827'
                },
                // Card/container colors
                card: {
                    light: '#f9fafb',
                    dark: '#1f2937',
                    DEFAULT: '#f9fafb'
                }
            },
            // ... rest of your config
        }
    }
}