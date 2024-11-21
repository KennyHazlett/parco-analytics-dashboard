import { createTheme, Components, Theme } from "@mui/material/styles";
import { TypographyProps } from "@mui/material/Typography";

// Extend Typography variants
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body2Medium: true;
    body1Medium: true;
    body3: true;
    body3Medium: true;
    body3ActuallyMedium: true;
  }
}

// Extend theme typography options
declare module "@mui/material/styles" {
  interface TypographyVariants {
    body3: React.CSSProperties;
    body2Medium: React.CSSProperties;
    body1Medium: React.CSSProperties;
    body3Medium: React.CSSProperties;
    body3ActuallyMedium: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    body2Medium?: React.CSSProperties;
    body1Medium?: React.CSSProperties;
    body3Medium?: React.CSSProperties;
    body3ActuallyMedium?: React.CSSProperties;
  }
}

// Define custom component overrides
const components: Components<Theme> = {
  MuiTypography: {
    variants: [
      {
        props: { variant: "body2Medium" as TypographyProps["variant"] },
        style: {
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize: "16px",
          letterSpacing: "0%",
        },
      },
      {
        props: { variant: "body1Medium" as TypographyProps["variant"] },
        style: {
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: "18px",
          letterSpacing: "0px",
        },
      },
      {
        props: { variant: "body3" as TypographyProps["variant"] },
        style: {
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          letterSpacing: "0%",
        },
      },
      {
        props: { variant: "body3Medium" as TypographyProps["variant"] },
        style: {
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: "14px",
          letterSpacing: "2%",
        },
      },
      {
        props: { variant: "body3ActuallyMedium" as TypographyProps["variant"] },
        style: {
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize: "14px",
          letterSpacing: "0%",
        },
      },
    ],
  },
};

const theme = createTheme({
  components,
  palette: {
    primary: { main: "#3B82F6" },
    secondary: { main: "#60BE6499" },
    error: { main: "#EF4444" },
    text: { primary: "#495057" },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",

    // Heading styles
    h1: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 300,
      fontSize: "56px",
      lineHeight: "116.7%",
      letterSpacing: "-1.5px",
    },
    h2: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
      fontSize: "40px",
      lineHeight: "116.7%",
      letterSpacing: "0px",
    },
    h3: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
      fontSize: "32px",
      lineHeight: "116.7%",
      letterSpacing: "0px",
    },
    h4: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "133.4%",
      letterSpacing: "0.25px",
    },
    h5: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "133.4%",
      letterSpacing: "0px",
    },

    // Body styles
    body1: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "16px",
      letterSpacing: "0px",
    },
    body2: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "16px",
      letterSpacing: "0%",
    },
    body3: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "14px !important",
      letterSpacing: "0%",
      lineHeight: "16px",
    },
    body2Medium: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      fontSize: "16px",
      letterSpacing: "0%",
      lineHeight: "16px",
    },
    body1Medium: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
      fontSize: "18px",
      letterSpacing: "0px",
      lineHeight: "16px",
    },
    body3Medium: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: "14px",
      letterSpacing: "2%",
      lineHeight: "16px",
    },
    body3ActuallyMedium: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      fontSize: "14px",
      letterSpacing: "0%",
      lineHeight: "16px",
    },
  },
});

export default theme;
