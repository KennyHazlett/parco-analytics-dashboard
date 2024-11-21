import { ToggleButtonGroup, styled } from "@mui/material";

// eslint-disable-next-line no-empty-pattern
const CustomToggleButtonGroup = styled(ToggleButtonGroup)(({}) => ({
  backgroundColor: "#A3A7AA",
  padding: "3px",
  borderRadius: "9999px",
  width: "179px",
  height: "31px",
  position: "relative",
  overflow: "hidden",
  justifyContent: "space-between",

  "& .MuiToggleButtonGroup-grouped": {
    margin: 0,
    border: 0,
    padding: "6px 20px",
    borderRadius: "9999px",
    zIndex: 2,
    position: "relative",
    color: "#fff",
    width: "179px",
    height: "31px",
    transition: "color 0.3s ease-out",
    justifycontent: "space-between",
    textTransform: "none",

    "& .MuiTouchRipple-root": {
      display: "none",
    },
  },

  "& .slider": {
    position: "absolute",
    width: "89px",
    height: "31px",
    backgroundColor: "#fff",
    borderRadius: "9999px",
    transition: "transform 0.3s ease-out",
    zIndex: 1,
  },

  "& .Mui-selected": {
    color: "#495057",
    backgroundColor: "transparent !important",
  },

  "& .slider.right": {
    transform: "translateX(90px)",
  },
}));

export default CustomToggleButtonGroup;
