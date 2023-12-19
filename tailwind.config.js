/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.vue"],
    theme: {
        fontFamily: {
            "theme-content": ["'Exo 2'", "sans-serif"],
            "theme-heading": ["CircularStd","Helvetica","Roboto","Arial","sans-serif"],
        },
        extend: {
            colors: {
                "theme-indyblue": "#001d6c",
                "theme-primary": "#3865fd",
                "theme-secondary": "#3865fd",
                "theme-grayish-blue": "#9194A1",
                "theme-dark-blue": "rgb(37, 43, 70)",
                "theme-dark-blue-tp": "rgba(37, 43, 70, 0.9)",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
