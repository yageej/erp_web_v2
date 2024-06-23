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
import AnimationPerRoute from "../AnimationPerRoute";
import MyDocumentDetails from "./MyDocumentDetails";
import ProfessionalDetails from "./ProfessionalDetails";
import EmailandOtherAccessDetails from "./EmailandOtherAccessInfo";
import StatutoryDetails from "./StatutoryDetails";

const MyProfile = () => {
  const animationClass = AnimationPerRoute();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={animationClass}>
      <h3>My Profile</h3>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label={
                  <span>
                    <strong>Personal Details</strong>
                  </span>
                }
                value="1"
              />
              <Tab
                label={
                  <span>
                    <strong>Documents</strong>
                  </span>
                }
                value="2"
              />
              <Tab
                label={
                  <span>
                    <strong>Professional Details</strong>
                  </span>
                }
                value="3"
              />

              <Tab
                label={
                  <span>
                    <strong>Statutory Details</strong>
                  </span>
                }
                value="4"
              />
              <Tab
                label={
                  <span>
                    <strong>HMO Details</strong>
                  </span>
                }
                value="5"
              />
              <Tab
                label={
                  <span>
                    <strong>Salary Details</strong>
                  </span>
                }
                value="6"
              />
              <Tab
                label={
                  <span>
                    <strong>Employee History</strong>
                  </span>
                }
                value="7"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <PersonalDetails />
          </TabPanel>
          <TabPanel value="2">
            <MyDocumentDetails title="My Documents" />
          </TabPanel>
          <TabPanel value="3">
            <ProfessionalDetails title="Professional Details" />
          </TabPanel>
          <TabPanel value="4">
            <StatutoryDetails title="Professional Details" />
          </TabPanel>
          <TabPanel value="5"></TabPanel>
          <TabPanel value="6"></TabPanel>
          <TabPanel value="7"></TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default MyProfile;
