export const theme = {
  colors: {
    champagne: "#FFEAD0",
    mintCream: "#F1F7ED",
    night: "#090C08",
    gray: "#6B7D7D",
    imperialRed: "#F71735",
    indianRed: "#E15554",
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif",
    },
    sizes: {
      xsmall: ".8rem",
      small: "1.6rem",
      medium: "2.4rem",
      large: "3.2rem",
      xlarge: "4.0rem",
      xxlarge: "4.8rem",
      huge: "5.6rem",
      xhuge: "6.4rem",
    },
  },
  media: {
    medium: "(min-width: 768px)",
    large: "(min-width: 960px)",
    xlarge: "(min-width: 1024px)",
    xxlarge: "(min-width: 1440px)",
  },
  spacings: {
    xsmall: ".8rem",
    small: "1.6rem",
    medium: "2.4rem",
    large: "3.2rem",
    xlarge: "4.0rem",
    xxlarge: "4.8rem",
    huge: "5.6rem",
    xhuge: "6.4rem",
  },
  borderRadius: '3px',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
} as const;
