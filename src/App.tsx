// src/App.tsx
import React from "react";
import DailyUserGraph from "./components/DailyUserGraph";
import { Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <DailyUserGraph />
    </Box>
  );
};

export default App;
