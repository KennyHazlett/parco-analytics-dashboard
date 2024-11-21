// src/theme/theme.d.ts
import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body2Medium: React.CSSProperties;
    body1Medium: React.CSSProperties;
    body3: React.CSSProperties;
    body3Medium: React.CSSProperties;
    body3ActuallyMedium: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body2Medium?: React.CSSProperties;
    body1Medium?: React.CSSProperties;
    body3?: React.CSSProperties;
    body3Medium?: React.CSSProperties;
    body3ActuallyMedium?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body2Medium: true;
    body1Medium: true;
    body3: true;
    body3Medium: true;
    body3ActuallyMedium: true;
  }
}
