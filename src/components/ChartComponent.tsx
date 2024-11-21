import React from "react";
import { BarChart } from "@mui/x-charts";
import { UserData } from "../data/mockData";
import theme from "../theme/theme";

interface ChartComponentProps {
  view: "total" | "types";
  processedData: UserData[];
  importantDates: Set<string>;
}

/**
 * Chart component for visualizing user data
 * @param {ChartComponentProps} props Component properties
 * @returns {JSX.Element} Bar chart visualization
 */
const ChartComponent: React.FC<ChartComponentProps> = ({
  view,
  processedData,
  importantDates,
}) => {
  const totalData = processedData.map((item: UserData) => ({
    date: item.date,
    total: item.urgent + item.likely + item.unlikely + item.notActionable,
  }));

  const typesData = processedData.map((item: UserData) => ({
    date: item.date,
    urgent: item.urgent,
    likely: item.likely,
    unlikely: item.unlikely,
    notActionable: item.notActionable,
    total: item.urgent + item.likely + item.unlikely + item.notActionable,
  }));

  return (
    <BarChart
      dataset={view === "total" ? totalData : typesData}
      xAxis={[
        {
          scaleType: "band",
          dataKey: "date",
          disableTicks: true,
          tickLabelInterval: (value) => importantDates.has(value),
          labelStyle: {
            fontSize: theme.typography.body1.fontSize,
            fontFamily: theme.typography.body1.fontFamily,
          },
        },
      ]}
      yAxis={[
        {
          min: 0,
          max: 100,
          tickInterval: "auto",
          disableLine: true,
          disableTicks: true,
          labelStyle: {
            fontSize: theme.typography.body1.fontSize,
            fontFamily: theme.typography.body1.fontFamily,
          },
        },
      ]}
      series={
        view === "types"
          ? [
              {
                dataKey: "urgent",
                label: "URGENT Actionable",
                color: "#60BE64",
                stack: "total",
                stackOrder: "reverse",
              },
              {
                dataKey: "likely",
                label: "Likely Actionable",
                color: "#60BE6499",
                stack: "total",
              },
              {
                dataKey: "unlikely",
                label: "Unlikely Actionable",
                color: "#60BE644D",
                stack: "total",
              },
              {
                dataKey: "notActionable",
                label: "Not Actionable",
                color: "#FD5C70",
                stack: "total",
              },
              {
                dataKey: "total",
                label: "Total",
                color: "transparent",
                stackOffset: "expand",
                stack: "none",
              },
            ]
          : [
              {
                dataKey: "total",
                label: "Total",
                color: "#60BE6499",
              },
            ]
      }
      grid={{ horizontal: true, vertical: false }}
      height={400}
      margin={{ left: 40, right: 40 }}
      slotProps={{
        legend: {
          hidden: true,
        },
      }}
      sx={{
        "& .MuiChartsAxis-tickLabel": {
          fontSize: theme.typography.body3,
        },
        "& .css-12zi39b-MuiChartsAxis-root-MuiChartsXAxis-root .MuiChartsAxis-tickLabel":
          {
            baselineShift: "sub",
            dy: "10px !important",
          },
      }}
    />
  );
};

export default ChartComponent;
