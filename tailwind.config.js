/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const generateSizeClass = (upToSize, startAt = 80) => {
    const classes = {};
    for (let i = startAt; i < upToSize / 4; i += 4) {
        classes[i] = `${(i * 4) / 16}rem`;
    }

    return classes;
}

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            "xxs": "300px",
            "xs": "475px",
            ...defaultTheme.screens
        },
        extend: {
            width: generateSizeClass(1024),
            minHeight: generateSizeClass(1024, 0),
            maxHeight: generateSizeClass(1024, 0),
            maxWidth: generateSizeClass(1024, 0),
            minWidth: generateSizeClass(1024, 0),
            borderWidth: {
                "1": "1px"
            }
        }
    },
    plugins: [
        require("@tailwindcss/forms")
    ],
}