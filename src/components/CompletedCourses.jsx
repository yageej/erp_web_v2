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
import MyCourseLogo from "../assets/courselogo.jpg";
import CardComponent from "./CardComponent";

const CompletedCourses = () => {
  const courseDetails = [
    {
      coursetitle: "React Course",
      coursedescription: "This is a sample course for React on Completed tab",
    },
    {
      coursetitle: "Javascript Course",
      coursedescription:
        "This is a sample course for Javascript on Completed tab",
    },
  ];
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {courseDetails.map((c, key) => (
          <CardComponent
            coursetitle={c.coursetitle}
            coursedescription={c.coursedescription}
            key={key}
          />
        ))}
      </Box>
    </>
  );
};

export default CompletedCourses;
