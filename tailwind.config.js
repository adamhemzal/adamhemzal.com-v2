module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // Customize default color palette, font stacks, type scale, etc
  theme: {
    // Add custom colors
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      colorBlack: '#2B3342',
      colorWhite: '#FFF',
      colorGrayLight: '#F3F3F3',
      colorGrayMedium: '#CCCCCC',
      colorGrayDark: '#A2A2A2',
      colorOrangeLight: '#F5E6CA',
      colorOrange: '#FB9300',
    },
    // Add custom font family
    fontFamily: {
      'sans': ['Lexend Deca', 'Arial', 'sans-serif'],
    },
    fontWeight: {
      light: 300,
      medium: 500,
      bold: 700,
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontSize: {
        'body': '1.05rem',
        'h1': '3.052em',
        'h2': '2.441em',
        'h3': '1.953em',
        'h4': '1.563em',
        'h5': '1.25em',
      }
    },
  },
  // Add Tailwind plugins for additional functionality
  plugins: [],
}
