export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
            },
            colors: {
                'heaven': {
                    dark: '#0a0a0f',
                    light: '#e8e8f0',
                    accent: '#4a4a6a',
                }
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'fade-out': 'fadeOut 1s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeOut: {
                    '0%': { opacity: '1', transform: 'translateY(0)' },
                    '100%': { opacity: '0', transform: 'translateY(-20px)' },
                },
            },
        },
    },
    plugins: [],
}
