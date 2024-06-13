import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import IconButton from "@mui/material/IconButton";
import AddTaskTwoToneIcon from "@mui/icons-material/AddTaskTwoTone";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Tasks = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const mycolumns = [
    { field: "TaskName", headerName: "My Task Name", width: 200 },
    { field: "Priority", headerName: "Priority", width: 130 },
    { field: "Status", headerName: "Status", width: 130 },
    {
      field: "Action",
      headerName: "Action",
      //   type: "number",
      width: 90,
    },
  ];
  const teamcolumns = [
    { field: "TaskName", headerName: "Team Task Name", width: 200 },
    { field: "Priority", headerName: "Priority", width: 130 },
    { field: "Status", headerName: "Status", width: 130 },
    {
      field: "Action",
      headerName: "Action",
      //   type: "number",
      width: 90,
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
      <h3>Tasks</h3>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <div>
          <Link to="/Tasks/Addtaskform">
            <Button sx={{ float: "right", fontSize: 16 }} variant="outlined">
              {" "}
              New Task&nbsp; <AddTaskTwoToneIcon />
            </Button>
          </Link>
        </div>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="My Task" value="1" />
              <Tab label="Team Task" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={mycolumns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 3 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
              />
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={teamrows}
                columns={teamcolumns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 3 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
              />
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default Tasks;
