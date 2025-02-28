/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('/src/assets/background-road-edited.jpg')", // Add your image path here
        "about-bg" :"url('/src/assets/about-us-background.png')",
        "testimonials-bg" :"url('/src/assets/testimonial-backgraund.png')",
      },
      screens: {
        xs: "507px", // Define a custom breakpoint called 'xs'
      },
    },
  },
  plugins: [],
};
