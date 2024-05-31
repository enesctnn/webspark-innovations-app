import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        regalblue: {
          50: '#9BAAD7',
          100: '#718EB1',
          200: '#48628B',
          300: '#2E4B70',
          400: '#24385A',
          500: '#1E3765',
          600: '#182E58',
          700: '#13254A',
          800: '#0D1C3D',
          900: '#08132F',
          950: '#04091A',
          DEFAULT: '#1E3765',
        },
        whitelilac: {
          50: '#FFFFFF',
          100: '#FCFCFD',
          200: '#F9F9FA',
          300: '#F5F6F7',
          400: '#F2F3F4',
          500: '#F8F9FC',
          600: '#D0D1D4',
          700: '#A8A9AC',
          800: '#808183',
          900: '#585859',
          950: '#303030',
          DEFAULT: '#F8F9FC',
        },
        pastelblue: {
          50: '#ECF1F9',
          100: '#D8E2EC',
          200: '#C4D4E0',
          300: '#B0C6D4',
          400: '#9CB7C7',
          500: '#8DA3B1',
          600: '#7E8E9A',
          700: '#6E7A84',
          800: '#5E656D',
          900: '#4E5057',
          950: '#3E3B40',
          DEFAULT: '#B0C6D4',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(100%) ' },
          to: { transform: 'translateX(-100%)' },
        },
        'reverse-infinite-scroll': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(100%)' },
        },
        bump: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(0.6)' },
          '30%': { transform: 'scale(1.4)' },
          '50%': { transform: 'scale(1.6)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        bump: 'bump 0.5s',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'reverse-infinite-scroll':
          'reverse-infinite-scroll 25s linear infinite',
      },
      backgroundImage: {
        ellipse: 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
