module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4fd1c5', // Light blueish color
        secondary: '#edf2f7', // Soft light background
        accent: '#2d3748', // Darker accent for text
      },
      borderRadius: {
        'lg': '12px',
        'xl': '16px',
      },
      backdropBlur: {
        'sm': '4px',
        'md': '8px',
      },
    },
  },
  plugins: [],
};