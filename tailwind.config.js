const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js', './lib/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
        0.75: "0.1875rem",
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#CBECFE',
          200: '#98D5FD',
          300: '#64B8FB',
          400: '#3D9CF7',
          500: '#0070F3',
          600: '#0056D0',
          700: '#0040AE',
          800: '#002D8C',
          900: '#002074',
        },
        success: {
          100: "#E4FCDB",
          200: "#C3FAB9",
          300: "#99F193",
          400: "#74E377",
          500: "#49D159",
          600: "#35B34F",
          700: "#249647",
          800: "#17793D",
          900: "#0E6437",
        },
        info: {
          100: "#CCFCFF",
          200: "#99F2FF",
          300: "#66E2FF",
          400: "#3FCEFF",
          500: "#00AEFF",
          600: "#0087DB",
          700: "#0065B7",
          800: "#004793",
          900: "#00337A",
        },
        warning: {
          100: "#FEF1CF",
          200: "#FDE09F",
          300: "#FBC96F",
          400: "#F8B24B",
          500: "#F48E11",
          600: "#D1700C",
          700: "#AF5508",
          800: "#8D3D05",
          900: "#752D03",
        },
        danger: {
          100: "#FFDCD3",
          200: "#FFB1A8",
          300: "#FF7D7C",
          400: "#FF5C6A",
          500: "#FF264D",
          600: "#DB1B50",
          700: "#B7134F",
          800: "#930C4A",
          900: "#7A0747",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: theme("colors.primary.600"),
              },
              code: { color: theme("colors.primary.400") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.900"),
            },
            "h4,h5,h6": {
              color: theme("colors.gray.900"),
            },
            code: {
              color: theme("colors.green.500"),
              backgroundColor: theme("colors.gray.100"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },
            "code:before": {
              content: "none",
            },
            "code:after": {
              content: "none",
            },
            hr: { borderColor: theme("colors.gray.200") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.500"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.gray.500"),
            },
            "ul li > :last-child": {
              margin: 0,
            },
            "ul li > :first-child": {
              margin: 0,
            },
            strong: { color: theme("colors.gray.600") },
            blockquote: {
              color: theme("colors.gray.900"),
              borderLeftColor: theme("colors.gray.200"),
            },
          },
        },
        dark: {
                css: {
                  color: theme("colors.gray.300"),
                  a: {
                    color: theme("colors.primary.500"),
                    "&:hover": {
                      color: theme("colors.primary.400"),
                    },
                    code: { color: theme("colors.primary.400") },
                  },
                  h1: {
                    fontWeight: "700",
                    letterSpacing: theme("letterSpacing.tight"),
                    color: theme("colors.gray.100"),
                  },
                  h2: {
                    fontWeight: "700",
                    letterSpacing: theme("letterSpacing.tight"),
                    color: theme("colors.gray.100"),
                  },
                  h3: {
                    fontWeight: "600",
                    color: theme("colors.gray.100"),
                  },
                  "h4,h5,h6": {
                    color: theme("colors.gray.100"),
                  },
                  code: {
                    backgroundColor: theme("colors.gray.800"),
                  },
                  hr: { borderColor: theme("colors.gray.700") },
                  "ol li:before": {
                    fontWeight: "600",
                    color: theme("colors.gray.400"),
                  },
                  "ul li:before": {
                    backgroundColor: theme("colors.gray.400"),
                  },
                  "ul li > :last-child": {
                    margin: 0,
                  },
                  "ul li > :first-child": {
                    margin: 0,
                  },
                  strong: { color: theme("colors.gray.100") },
                  thead: {
                    color: theme("colors.gray.100"),
                  },
                  tbody: {
                    tr: {
                      borderBottomColor: theme("colors.gray.700"),
                    },
                  },
                  blockquote: {
                    color: theme("colors.gray.100"),
                    borderLeftColor: theme("colors.gray.700"),
                  },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
