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
import PersonalDetails from "./PersonalDetails";
import { Person } from "@mui/icons-material";

const MyProfile = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h3>My Profile</h3>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Personal Details" value="1" />
              <Tab label="Documents" value="2" />
              <Tab label="Professional Details" value="3" />

              <Tab label="Statutory Details" value="4" />
              <Tab label="HMO Details" value="5" />
              <Tab label="Salary Details" value="6" />
              <Tab label="Employee History" value="7" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <PersonalDetails />
          </TabPanel>
          <TabPanel value="2"></TabPanel>
          <TabPanel value="3"></TabPanel>
          <TabPanel value="4"></TabPanel>
          <TabPanel value="5"></TabPanel>
          <TabPanel value="6"></TabPanel>
          <TabPanel value="7"></TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default MyProfile;
