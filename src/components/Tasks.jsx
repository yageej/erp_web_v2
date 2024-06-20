import React from "react";
import Box from "@mui/material/Box";

import AddTaskTwoToneIcon from "@mui/icons-material/AddTaskTwoTone";
import { Link } from "react-router-dom";
import TabComponent from "./TabComponent";
import { Button } from "@mui/material";
import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";

const Tasks = (props) => {
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
    <>
      <h3>{title}</h3>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <div>
          <Link to="/Tasks/Addtaskform">
            <Button sx={{ float: "right", fontSize: 16 }} variant="outlined">
              New Task&nbsp; <AddTaskTwoToneIcon />
            </Button>
          </Link>
        </div>
        <TabComponent
          value={value}
          handleChange={handleChange}
          teamrows={teamrows}
          rows={rows}
          teamcolumns={teamcolumns}
          mycolumns={mycolumns}
        />
      </Box>
    </>
  );
};

export default Tasks;
