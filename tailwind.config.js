module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // Customize default color palette, font stacks, type scale, etc
  theme: {
    // Add custom colors
    colors: {
      'transparent': 'transparent',
      'current': 'currentColor',
      'colorBlack': '#2B3342',
      'colorWhite': '#FFF',
      'colorGrayLight': '#F3F3F3',
      'colorGrayMedium': '#CCCCCC',
      'colorGrayDark': '#A2A2A2',
      'colorOrangeLight': '#F5E6CA',
      'colorOrange': '#FB9300',
    },
    // Add custom font family
    fontFamily: {
      'sans': ['Lexend Deca', 'Arial', 'sans-serif'],
    },
    fontWeight: {
      'light': 300,
      'medium': 500,
      'bold': 700,
    },
    screens: {
      'sm': '540px',
      'md': '720px',
      'lg': '960px',
      'xl': '1140px',
    },
    container: {
      'center': true,
      'padding': '1rem',
    },
    extend: {
      fontSize: {
        'body': '1.05em',
        'h1': '3.052em',
        'h2': '2.441em',
        'h3': '1.953em',
        'h4': '1.563em',
        'h5': '1.25em',
        'button': '1.155em',
        'small': '0.85rem',
        'small2x': '0.75rem',
      },
      backgroundImage: {
        'footerPattern': 'url("/background/dot-grid.png")',
      },
      keyframes: {
        'bounce-x': {
          '0%, 100%': {
            'transform': 'translateX(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            'transform': 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          }
        }
      },
      animation: {
        'bounce-x': 'bounce-x 1s infinite',
      }
    },
  },
  // Add Tailwind plugins for additional functionality
  plugins: [],
}
