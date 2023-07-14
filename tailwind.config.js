/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'rh-spinner-small-animation-dash': {
          '50%': { 'stroke-dashoffset': 0 },
          '75%': { transform: 'rotate(280deg)' },
          '100%': { 'stroke-dashoffset': -71 },
        },
        'rh-spinner-animation-dash': {
          '50%': { 'stroke-dashoffset': 0 },
          '75%': { transform: 'rotate(280deg)' },
          '100%': { 'stroke-dashoffset': -283 },
        },
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '80px',
      },
      fontSize: {
        'headline-xl': [
          '40px',
          {
            lineHeight: '1.2',
            fontWeight: '400',
          },
        ],
        'headline-lg': [
          '36px',
          {
            lineHeight: '1.3',
            fontWeight: '500',
          },
        ],
        'headline-md': [
          '28px',
          {
            lineHeight: '1.3',
            fontWeight: '500',
          },
        ],
        'headline-xs': [
          '20px',
          {
            lineHeight: '1.3',
            fontWeight: '400',
          },
        ],
        'm-headline-xl': [
          '29px',
          {
            lineHeight: '1.2',
            fontWeight: '400',
          },
        ],
        'm-headline-lg': [
          '26px',
          {
            lineHeight: '1.3',
            fontWeight: '500',
          },
        ],
        'm-headline-md': [
          '24px',
          {
            lineHeight: '1.3',
            fontWeight: '500',
          },
        ],
        'm-headline-sm': [
          '20px',
          {
            lineHeight: '1.3',
            fontWeight: '400',
          },
        ],
        'm-headline-xs': [
          '18px',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        // Body Copy
        xl: [
          '20px',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        lg: [
          '18px',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        md: [
          '16px',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        sm: [
          '14px',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        xs: [
          '12px',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        'm-xl': [
          '18px',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        'm-lg': [
          '16px',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
      },
      fontFamily: {
        'redhat-display': [
          'Red Hat Display',
          'RedHatDisplay',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        'redhat-text': [
          'Red Hat Text',
          'RedHatText',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}

