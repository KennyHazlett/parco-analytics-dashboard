import React, { useState, useMemo } from "react";
import { Box } from "@mui/material";
import { dailyUserData } from "../data/mockData";
import GraphHeader from "./GraphHeader";
import ChartComponent from "./ChartComponent";

const DailyUserGraph: React.FC = () => {
  const [view, setView] = useState<"total" | "types">("total");

  const handleViewChange = (
    _: React.MouseEvent<HTMLElement>,
    newView: "total" | "types"
  ) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const processedData = useMemo(() => {
    const todayEntry = dailyUserData.find((item) => item.date === "Today");
    if (todayEntry) {
      const filteredData = dailyUserData.filter(
        (item) => item.date !== "Today"
      );
      return [...filteredData, todayEntry];
    }
    return dailyUserData;
  }, []);

  const importantDates = useMemo(() => {
    const dates = new Set<string>();
    let currentMonth = "";
    let firstOfMonth = "";

    processedData.forEach((item) => {
      const month = item.date.substring(0, 3);
      if (month !== currentMonth) {
        if (firstOfMonth) {
          dates.add(firstOfMonth);
        }
        currentMonth = month;
        firstOfMonth = item.date;
        dates.add(item.date);
      }
    });

    dates.add("Today");
    return dates;
  }, [processedData]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: 512,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          p: 3,
          borderRadius: 2,
          height: "100%",
        }}
      >
        <GraphHeader view={view} onViewChange={handleViewChange} />
        <ChartComponent
          view={view}
          processedData={processedData}
          importantDates={importantDates}
        />
      </Box>
    </Box>
  );
};

export default DailyUserGraph;
