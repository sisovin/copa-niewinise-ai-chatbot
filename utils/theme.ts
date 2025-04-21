import { createTheme } from 'shadcn-ui';

const theme = createTheme({
  colors: {
    primary: '#0070f3',
    secondary: '#1c1c1e',
    background: '#ffffff',
    text: '#000000',
    darkBackground: '#121212',
    darkText: '#ffffff',
    subscriptionPlanBackground: '#e0e0e0',
    subscriptionPlanText: '#000000',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
  },
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
  },
  space: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
  },
  radii: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
  },
});

export default theme;
