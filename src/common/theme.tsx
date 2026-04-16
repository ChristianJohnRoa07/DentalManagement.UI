
import { createTheme } from "@mui/material/styles";
import { type TreatmentType } from "../common/types"
import { type TreatmentColors } from "../common/interface"

export const TREATMENT_TYPE_COLOR: Record<TreatmentType, TreatmentColors> = {
    Cleaning: { bgcolor: "#DCFCE7", textColor: "#166534" },     // Light Green - Dark Green
    "X-Ray": { bgcolor: "#DBEAFE", textColor: "#1E40AF" },      // Light Blue - Dark Blue
    Filling: { bgcolor: "#FEF3C7", textColor: "#92400E" },      // Light Yellow - Dark Yellow
    Consult: { bgcolor: "#EDE9FE", textColor: "#4C1D95" },      // Light Violet - Dark Violet
    Ortho: { bgcolor: "#FCE7F3", textColor: "#831843" },        // Light Pink - Dark Pink
    Extraction: { bgcolor: "#FEE2E2", textColor: "#7F1D1D" },   // Light Blue - Dark Blue
};



export const theme = createTheme({
  palette: {
    mode: "light",
    primary:    { main: "#0F9B75", light: "#E0F4EE", dark: "#0A7558" },
    secondary:  { main: "#7C3AED" },
    warning:    { main: "#D97706" },
    error:      { main: "#DC2626" },
    background: { default: "#F7F8FA", paper: "#FFFFFF" },
    text:       { primary: "#111827", secondary: "#6B7280" },
    treatmentTypes: TREATMENT_TYPE_COLOR,
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    h5:    { fontWeight: 600, letterSpacing: "-0.3px" },
    h6:    { fontWeight: 600, letterSpacing: "-0.2px" },
    body1: { fontSize: "0.875rem" },
    body2: { fontSize: "0.75rem" },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: "none" } },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          marginBottom: 2,
          paddingTop: 7,
          paddingBottom: 7,
          "&.Mui-selected": {
            backgroundColor: "#E0F4EE",
            color: "#0A7558",
            "& .MuiListItemIcon-root": { color: "#0A7558" },
            "&:hover": { backgroundColor: "#CBF0E4" },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500, fontSize: "0.8rem", height: 22, borderRadius: 6 },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", fontWeight: 500, borderRadius: 8 },
      },
    },
  },
});