const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-white': 'rgba(255, 255, 255, 0.18)',
        'card-ligh': 'rgba(255, 255, 255, 0.1)',
      },
    },
    fontFamily: {
      roobert: ['Roobert regular', 'Inter', 'sans-serif'],
      roobertLight: ['Roobert light', 'Inter', 'sans-serif'],
      roobertSemiBold: ['Roobert Semibold', 'Inter', 'sans-serif'],
      din: ['DIN', 'Inter', 'sans-serif'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
});


