import React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DataGridComponent from "./DataGridComponent";
import AddTaskTwoToneIcon from "@mui/icons-material/AddTaskTwoTone";
import { Link, useFetcher } from "react-router-dom";
import TabComponent from "./TabComponent";
import { Button } from "@mui/material";
import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";
import AnimationPerRoute from "../AnimationPerRoute";
import axios from "axios";

const Tasks = (props) => {
  const [taskData, setTaskData] = useState([]);

  const url = "http://localhost:3000/api/tasks";
  // const getTaskData = () => {
  // axios
  //   .get(url)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console≠log(err);
  //   });
  useEffect(() => {
    axios
      .get(url, { crossdomain: true })
      .then((result) => {
        // console.log("result", result.data.task);
        // console.log("result", ...result.data);
        setTaskData(result.data);
        // console.log("Data Collected", result.data[0]);
      })
      .catch((error) => {
        // console.log("Error", error);
      });
  }, []);

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
    { field: "taskname", headerName: "My Task Name", width: 250 },
    { field: "priority", headerName: "Priority", width: 180 },
    { field: "status", headerName: "Status", width: 180 },
    {
      field: "",
      headerName: "Action",
      width: 150,
      // valueGetter: actionModify,
      renderCell: renderActionButton,
    },
  ];
  const teamcolumns = [
    { field: "taskname", headerName: "Team Task Name", width: 250 },
    { field: "priority", headerName: "Priority", width: 180 },
    { field: "status", headerName: "Status", width: 180 },
    {
      field: "",
      headerName: "Action",
      width: 150,
      // valueGetter: actionModify,
      renderCell: renderActionButton,
    },
  ];

  const rowsdata = taskData;

  const isTeamData = rowsdata.filter((r) => r.isTeamTask === "Yes");
  const isMyData = rowsdata.filter((r) => r.isTeamTask !== "Yes");

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
            <DataGridComponent rows={isMyData} columns={mycolumns} />
          </TabPanel>
          <TabPanel value="2">
            <DataGridComponent rows={isTeamData} columns={teamcolumns} />
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
