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

import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";

const PersonalDetails = () => {
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
            <Typography>{children}</Typography>
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

  // This is for select options element
  const [gender, setGender] = React.useState("");

  const handleChange2 = (event) => {
    setGender(event.target.value);
  };

  const [bloodtype, setBloodType] = React.useState("");

  const handleChange3 = (event) => {
    setBloodType(event.target.value);
  };

  const [civilstatus, setCivilstatus] = React.useState("");

  const handleChange4 = (event) => {
    setCivilstatus(event.target.value);
  };
  return (
    <>
      <Box>
        <Grid container>
          <Grid item sx={6}>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: 400,
              }}
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                  borderRight: 3,
                  borderColor: "divider",
                }}
              >
                <Tab label="Personal Information" {...a11yProps(0)} />
                <Tab label="Address" {...a11yProps(1)} />
                <Tab label="Contact Information" {...a11yProps(2)} />
                <Tab label="Emergency Contact" {...a11yProps(3)} />
                <Tab label="Company Information" {...a11yProps(4)} />
                <Tab label="Employment Details" {...a11yProps(5)} />
              </Tabs>
            </Box>
          </Grid>
          <Grid item sx={6}>
            <TabPanel value={value} index={0}>
              <Button sx={{ float: "right", fontSize: 19 }}>
                <DriveFileRenameOutlineTwoToneIcon />
              </Button>
              <h4>Personal Info</h4>{" "}
              <Box sx={{ bgcolor: "paper", color: "Divider", padding: 3 }}>
                <Box sx={{ display: "flex", flexWrap: "wrap", width: 750 }}>
                  <br />
                  <TextField
                    label="First Name"
                    disabled
                    sx={{ margin: 1, width: 300 }}
                  />
                  <TextField
                    label="Middle Name"
                    disabled
                    sx={{ margin: 1, width: 300 }}
                  />
                  <TextField
                    label="Last Name"
                    disabled
                    sx={{ margin: 1, width: 300 }}
                  />
                </Box>
                <br />
                <Box sx={{ display: "flex", flexWrap: "wrap", width: 900 }}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Leave Type"
                      value={gender}
                      onChange={handleChange2}
                      sx={{ width: 200, margin: 1 }}
                    >
                      <MenuItem value=" Male">Male</MenuItem>
                      <MenuItem value=" Female">Female</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Blood Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Blood Type"
                      value={bloodtype}
                      onChange={handleChange3}
                      sx={{ width: 200, margin: 1 }}
                    >
                      <MenuItem value="A">A</MenuItem>
                      <MenuItem value="AB">AB</MenuItem>
                      <MenuItem value="C">C</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      Civil Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Civil Status"
                      value={civilstatus}
                      onChange={handleChange4}
                      sx={{ width: 200, margin: 1 }}
                    >
                      <MenuItem value="Single ">Single</MenuItem>
                      <MenuItem value="Married ">Married</MenuItem>
                      <MenuItem value="Widowed ">Widowed</MenuItem>
                      <MenuItem value="Separated ">Separated</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
              Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
              Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
              Item Six
            </TabPanel>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PersonalDetails;
