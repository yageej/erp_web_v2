import React from "react";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ListItemText, List } from "@mui/material";
import { Divider } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AnimationPerRoute from "../AnimationPerRoute";
import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";
import PersonalInfo from "./PersonalInfo";
import FadeRight from "../FadeRight";
import AddressInfo from "./AddressInfo";
import ContactInfo from "./ContactInfo";
import EmergencyContactInfo from "./EmergencyContactInfo";
import CompanyInfo from "./CompanyInfo";
import EmployeeDetailsInfo from "./EmployeeDetailsInfo";
import { Diversity1Outlined } from "@mui/icons-material";
import JobInfo from "./JobInfo";
import EmailandOtherAccessDetails from "./EmailandOtherAccessInfo";
import AssignmentandReportingInfo from "./AssignmentandReportingInfo";
import StatutoryInfo from "./StatutoryInfo";

const StatutoryDetails = (props) => {
  const animationClass1 = AnimationPerRoute();
  const animationClass2 = FadeRight();

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Box>{children}</Box>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={animationClass1}>
      <Box>
        <Grid container>
          <Grid item xs={2}>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: 300,
              }}
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                  borderRight: 1,
                  borderColor: "divider",
                }}
              >
                <Tab label="Statutory Information" {...a11yProps(0)} />
              </Tabs>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TabPanel value={value} index={0}>
              <Button sx={{ float: "right", fontSize: 19 }}>
                <DriveFileRenameOutlineTwoToneIcon />
              </Button>
              <span className={animationClass2}>
                <StatutoryInfo title="Statutory Information" />
              </span>
            </TabPanel>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default StatutoryDetails;
