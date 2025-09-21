import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0, 0%, 96%)',
        foreground: 'hsl(0, 0%, 15%)',
        primary: {
          DEFAULT: 'hsl(142, 70%, 40%)',
          foreground: 'hsl(0, 0%, 100%)',
        },
        secondary: {
          DEFAULT: 'hsl(0, 0%, 40%)',
          foreground: 'hsl(0, 0%, 15%)',
        },
        accent: {
          DEFAULT: 'hsl(200, 50%, 50%)',
          foreground: 'hsl(0, 0%, 100%)',
        },
        surface: 'hsl(0, 0%, 100%)',
        muted: {
          DEFAULT: 'hsl(0, 0%, 96%)',
          foreground: 'hsl(0, 0%, 40%)',
        },
        card: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(0, 0%, 15%)',
        },
        agricultural: {
          green: 'hsl(142, 70%, 40%)',
          yellow: 'hsl(45, 100%, 50%)',
          brown: 'hsl(30, 40%, 30%)',
        }
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px',
      },
      spacing: {
        'lg': '24px',
        'md': '16px',
        'sm': '8px',
      },
      boxShadow: {
        'card': '0 4px 12px hsla(0, 0%, 0%, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-up': 'slideUp 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
