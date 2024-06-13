import React from "react";
import Box from "@mui/material/Box";

import { DataGrid } from "@mui/x-data-grid";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import TimeSheet from "./TimeSheet";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ApplyLeave from "./ApplyLeave";
import AMR from "./AMR";
import Schedule from "./Schedule";
import HolidayList from "./HolidayList";

const AttendanceandRoster = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // This is for Apply Leave Drawer
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box
      sx={{ width: 550, paddingTop: 7 }}
      role="presentation"
      onClick={toggleDrawer(true)}
    >
      <ApplyLeave />
    </Box>
  );
  return (
    <>
      {" "}
      {/*Header Portion*/}
      <h3>Attendance & PTO</h3>
      <Stack direction="row" spacing={2}>
        <Grid container>
          <Grid item xs={2}>
            <Avatar sx={{ width: 60, height: 60 }}>GJ</Avatar>
            <h6>Employee #21</h6>
          </Grid>
          <Grid item xs={9}>
            <Box sx={{ float: "right" }}>
              <Button variant="contained" onClick={toggleDrawer(true)}>
                Apply Leave
              </Button>
              <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                anchor={"right"}
              >
                {DrawerList}
              </Drawer>
              &nbsp;
              <Button variant="outlined">PTO</Button>
            </Box>
          </Grid>
        </Grid>
      </Stack>
      {/* /*Tab Portion*/}
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Time Card" value="1" />
              <Tab label="AMR Logs" value="2" />
              <Tab label="Schedule" value="3" />
              <Tab label="Holiday List" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <TimeSheet />
          </TabPanel>
          <TabPanel value="2">
            <AMR />
          </TabPanel>
          <TabPanel value="3">
            <Schedule />
          </TabPanel>
          <TabPanel value="4">
            <HolidayList />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default AttendanceandRoster;
