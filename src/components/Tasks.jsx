import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DataGridComponent from "./DataGridComponent";

import AddTaskTwoToneIcon from "@mui/icons-material/AddTaskTwoTone";
import { Link } from "react-router-dom";
import TabComponent from "./TabComponent";
import { Button } from "@mui/material";
import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";
import AnimationPerRoute from "../AnimationPerRoute";

const Tasks = (props) => {
  const animationClass = AnimationPerRoute();

  const { title } = props;
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderActionButton = (p) => {
    return (
      <Button variant="outlined">
        <DriveFileRenameOutlineTwoToneIcon fontSize="small" />
      </Button>
    );
  };
  const mycolumns = [
    { field: "TaskName", headerName: "My Task Name", width: 200 },
    { field: "Priority", headerName: "Priority", width: 130 },
    { field: "Status", headerName: "Status", width: 130 },
    {
      field: "",
      headerName: "Action",
      width: 100,
      // valueGetter: actionModify,
      renderCell: renderActionButton,
    },
  ];
  const teamcolumns = [
    { field: "TaskName", headerName: "Team Task Name", width: 200 },
    { field: "Priority", headerName: "Priority", width: 130 },
    { field: "Status", headerName: "Status", width: 130 },
    {
      field: "",
      headerName: "Action",
      width: 100,
      // valueGetter: actionModify,
      renderCell: renderActionButton,
    },
  ];
  const rows = [
    {
      id: 2,
      TaskName: "Do Something",
      Priority: "Low",
      Status: "Active",
      Action: 42,
    },
    {
      id: 3,
      TaskName: "Do Something",
      Priority: "Urgent",
      Status: "InActive",
      Action: 42,
    },
    {
      id: 4,
      TaskName: "Do Something",
      Priority: "Urgent",
      Status: "Active",
      Action: 42,
    },
    {
      id: 5,
      TaskName: "Do Something",
      Priority: "Urgent",
      Status: "Active",
      Action: 42,
    },
  ];
  const teamrows = [
    {
      id: 2,
      TaskName: "Team Task Something",
      Priority: "High",
      Status: "Active",
      Action: 42,
    },
    {
      id: 3,
      TaskName: "Team Task Something",
      Priority: "High",
      Status: "InActive",
      Action: 42,
    },
    {
      id: 4,
      TaskName: "Team Task Something",
      Priority: "Low",
      Status: "Active",
      Action: 42,
    },
    {
      id: 5,
      TaskName: "Team Task Something",
      Priority: "High",
      Status: "Inactive",
      Action: 42,
    },
  ];
  return (
    <div className={animationClass}>
      <h3>{title}</h3>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <div>
          <Link to="/Tasks/AddTaskForm">
            <Button sx={{ float: "right", fontSize: 16 }} variant="outlined">
              New Task&nbsp; <AddTaskTwoToneIcon />
            </Button>
          </Link>
        </div>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label={
                  <span>
                    <strong>My Task</strong>
                  </span>
                }
                value="1"
              />
              <Tab
                label={
                  <span>
                    <strong>Team Task</strong>
                  </span>
                }
                value="2"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <DataGridComponent rows={rows} columns={mycolumns} />
          </TabPanel>
          <TabPanel value="2">
            <DataGridComponent rows={teamrows} columns={teamcolumns} />
          </TabPanel>
        </TabContext>
        {/* <TabComponent
          value={value}
          handleChange={handleChange}
          teamrows={teamrows}
          rows={rows}
          teamcolumns={teamcolumns}
          mycolumns={mycolumns}
          children={props.children}
        /> */}
      </Box>
    </div>
  );
};

export default Tasks;
