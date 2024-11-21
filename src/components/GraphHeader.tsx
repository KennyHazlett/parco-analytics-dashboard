import React from "react";
import { Box, ToggleButton, Typography } from "@mui/material";
import CustomToggleButtonGroup from "./CustomToggleButtonGroup";

interface GraphHeaderProps {
  view: "total" | "types";
  onViewChange: (
    event: React.MouseEvent<HTMLElement>,
    newView: "total" | "types"
  ) => void;
}

/**
 * Header component for the daily user graph
 * @param {GraphHeaderProps} props - Component props
 */
const GraphHeader: React.FC<GraphHeaderProps> = ({ view, onViewChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 2, sm: 0 },
      }}
      role="banner"
    >
      <Typography
        variant="body1Medium"
        component="h1"
        sx={{
          color: "#75787B",
        }}
      >
        Daily PARCO Users
      </Typography>
      <CustomToggleButtonGroup
        value={view}
        exclusive
        onChange={onViewChange}
        aria-label="View selection"
      >
        <div className={`slider ${view === "types" ? "right" : ""}`} />
        <ToggleButton value="total" aria-label="Show total view">
          <Typography variant="body2Medium">Total</Typography>
        </ToggleButton>
        <ToggleButton value="types" aria-label="Show types breakdown">
          <Typography variant="body2Medium">Types</Typography>
        </ToggleButton>
      </CustomToggleButtonGroup>
    </Box>
  );
};

export default GraphHeader;
