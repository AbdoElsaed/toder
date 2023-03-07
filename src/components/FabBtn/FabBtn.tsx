import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DashboardIcon from "@mui/icons-material/Dashboard";

const actions = [
  { icon: <AssignmentIcon />, name: "Task" },
  { icon: <DashboardIcon />, name: "Project" },
];

export const FabBtn = () => {
  return (
    <Box sx={{ height: 320, flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="FabBtn"
        sx={{
          position: "absolute",
          bottom: 30,
          right: 30,
          // "& .MuiSpeedDial-fab": { bgcolor: "#2979ff" },
        }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
          />
        ))}
      </SpeedDial>
    </Box>
  );
};
