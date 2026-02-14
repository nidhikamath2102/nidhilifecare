// Color configuration for Nidhi Life Care
// Modify these values to change the entire website's color scheme

export const colors = {
  // Primary brand colors
  logo: {
    maroon: '#800020', // Maroon for logo
    maroonLight: '#A0002C',
    maroonDark: '#600018',
  },

  // Business information colors
  business: {
    darkBlue: '#003366', // Dark blue for business name and address
    darkBlueLight: '#004080',
    darkBlueDark: '#002244',
  },

  // Medical/Healthcare theme colors
  medical: {
    white: '#FFFFFF',
    lightGray: '#F5F5F5',
    mediumGray: '#E0E0E0',
    darkGray: '#4A4A4A',
    accent: '#0088CC', // Medical blue accent
    accentLight: '#E6F5FB',
  },

  // Semantic colors
  text: {
    primary: '#1A1A1A',
    secondary: '#666666',
    light: '#999999',
  },

  // Background colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F8F9FA',
    accent: '#E6F5FB',
  },
};

// CSS variables export for use in global styles
export const cssVariables = `
  :root {
    --color-logo-maroon: ${colors.logo.maroon};
    --color-logo-maroon-light: ${colors.logo.maroonLight};
    --color-logo-maroon-dark: ${colors.logo.maroonDark};

    --color-business-dark-blue: ${colors.business.darkBlue};
    --color-business-dark-blue-light: ${colors.business.darkBlueLight};
    --color-business-dark-blue-dark: ${colors.business.darkBlueDark};

    --color-medical-white: ${colors.medical.white};
    --color-medical-light-gray: ${colors.medical.lightGray};
    --color-medical-medium-gray: ${colors.medical.mediumGray};
    --color-medical-dark-gray: ${colors.medical.darkGray};
    --color-medical-accent: ${colors.medical.accent};
    --color-medical-accent-light: ${colors.medical.accentLight};

    --color-text-primary: ${colors.text.primary};
    --color-text-secondary: ${colors.text.secondary};
    --color-text-light: ${colors.text.light};

    --color-bg-primary: ${colors.background.primary};
    --color-bg-secondary: ${colors.background.secondary};
    --color-bg-accent: ${colors.background.accent};
  }
`;
