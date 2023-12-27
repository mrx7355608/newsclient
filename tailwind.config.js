/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.jsx"],
    theme: {
        extend: {
            fontFamily: {
                urdu: ["Noto Nastaliq Urdu", "sans-serif"],
            },
        },
    },
    plugins: [],
};
