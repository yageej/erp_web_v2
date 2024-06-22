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
import AnimationPerRoute from "../AnimationPerRoute";

const CardComponent = (props) => {
  const animationClass = AnimationPerRoute();

  const { coursetitle, coursedescription, key } = props;
  return (
    <div className={animationClass}>
      <Card sx={{ maxWidth: 345, margin: 4 }} key={key}>
        <CardMedia component="img" alt="" height="140" image={MyCourseLogo} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {coursetitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {coursedescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View Course</Button>
          <Button size="small">Remove from Favorites</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardComponent;
