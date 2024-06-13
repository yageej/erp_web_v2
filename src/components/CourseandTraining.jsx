import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import IconButton from "@mui/material/IconButton";
import AddTaskTwoToneIcon from "@mui/icons-material/AddTaskTwoTone";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AllCourses from "./AllCourses";
import FavoriteCourses from "./FavoriteCourses";
import CompletedCourses from "./CompletedCourses";

const CourseandTraining = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h3>Courses</h3>
      <Box sx={{ width: "100%", typography: "body1" }}>
        {/* <div>
          <IconButton sx={{ float: "right", fontSize: 16 }}>
            Add Task&nbsp; <AddTaskTwoToneIcon />
          </IconButton>
        </div> */}
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="All Courses" value="1" />
              <Tab label="Favorites Courses" value="2" />
              <Tab label="Completed Courses" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{}}>
            <AllCourses />
          </TabPanel>
          <TabPanel value="2">
            <FavoriteCourses />
          </TabPanel>
          <TabPanel value="3">
            <CompletedCourses />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default CourseandTraining;
