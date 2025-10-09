import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        support: 'rgb(var(--color-support) / <alpha-value>)',
        contrast: 'rgb(var(--color-contrast) / <alpha-value>)',
        black: 'rgb(var(--color-black) / <alpha-value>)',
        white: 'rgb(var(--color-white) / <alpha-value>)',
        dark: 'rgb(var(--color-dark) / <alpha-value>)',
        light: 'rgb(var(--color-light) / <alpha-value>)',
      },
    },
    safelist: {
      safelist: [
        'bg-primary',
        'bg-secondary',
        'bg-contrast',
        'bg-support',
        'bg-dark',
        'bg-light',
        'text-primary',
        'text-secondary',
        'text-contrast',
        'text-support',
        'text-black',
        'text-white',
        'border-primary',
        'border-secondary',
        'border-contrast',
        'border-dark',
        'border-light',
        'border-none',
        'p-0',
        'p-4',
        'p-5',
        'p-6',
        'rounded-none',
        'rounded',
        'rounded-lg',
        'rounded-2xl',
        'rounded-tl-2xl',
        'rounded-tr-2xl',
        'rounded-bl-2xl',
        'rounded-br-2xl',
        'order-1 sm:!pr-5 sm:pl-0',
        'order-0 sm:pr-0',
      ],
    },
    content: {
      quote: '"""',
    },
  },
  plugins: [],
};
export default config;
