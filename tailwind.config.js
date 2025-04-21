/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'dropdown-show': 'dropdownShow 0.3s ease-out forwards',
        'dropdown-hide': 'dropdownHide 0.3s ease-in forwards',

        'menu-show': 'menuShow 0.3s ease-out forwards',
        'menu-hide': 'menuHide 0.3s ease-in forwards',

        'header-show': 'headerShow 0.3s ease-out forwards',
        'header-hide': 'headerHide 0.3s ease-in forwards',

        'top-arrow' : 'topArrow 1s ease-in-out infinite',
      },
      keyframes: {
        dropdownShow: {
          '0%': { transform: 'scaleY(0)', opacity: '0' },
          '100%': { transform: 'scaleY(1)', opacity: '1' },
        },
        dropdownHide: {
          '0%': { transform: 'scaleY(1)', opacity: '1' },
          '100%': { transform: 'scaleY(0)', opacity: '0' },
        },

        menuShow: {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '100%': { transform: 'scaleY(1)', opacity: '1' },
        },
        menuHide: {
          '0%': { transform: 'scaleX(1)', opacity: '1' },
          '100%': { transform: 'scaleX(0)', opacity: '0' },
        },

        headerShow: {
          '0%': { transform: 'scaleY(0)', opacity: '0' },
          '100%': { transform: 'scaleY(1)', opacity: '1' },
        },
        headerHide: {
          '0%': { transform: 'scaleY(1)', opacity: '1' },
          '100%': { transform: 'scaleY(0)', opacity: '0' },
        },
        topArrow : {
          '0%': { transform: 'translateY(0%)'},
          '50%': { transform:  'translateY(10%)'},
          '100%': { transform: 'translateY(0%)' },
        }
      },
    
  plugins: [],
},
  },
};
