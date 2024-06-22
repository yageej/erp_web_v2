import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import DatePickerComponent from "./DatePickerComponent";

const ApplyLeave = () => {
  // This is for Apply Leave Drawer
  const handleChange2 = (event) => {
    setLeaveType(event.target.value);
  };

  const [leavetype, setLeaveType] = React.useState("");

  return (
    <>
      <Box sx={{ margin: 4, maxWidth: 450 }}>
        <CalendarMonthTwoToneIcon sx={{ float: "right" }} fontSize="large" />
        <h3>Submit Leave</h3>
        <h5>You have day/s remaining PTO Credits</h5>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Leave Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Leave Type"
            value={leavetype}
            onChange={handleChange2}
          >
            <MenuItem value={10}>..</MenuItem>

            <MenuItem value="Maternity Leave">Maternity Leave</MenuItem>
            <MenuItem value="Vacation Leave">Vacation Leave</MenuItem>
            <MenuItem value="PaterSicknal Leave">Sick Leave Leave</MenuItem>
            <MenuItem value="Magna Carta  Leave">Magna Carta Leave</MenuItem>
            <MenuItem value="Paternal Leave">Paternal Leave</MenuItem>
          </Select>
          <br />

          <Box sx={{ display: "flex" }}>
            <DatePickerComponent dptitle="Start Date" />
            <DatePickerComponent dptitle="End Date" />
          </Box>

          <br />
          <TextField
            id="outlined-basic"
            label="Leave Reason"
            variant="outlined"
            multiline
            rows={4}
          />
        </FormControl>
        <Box sx={{ paddingTop: 3 }}>
          <Button variant="contained" sx={{ float: "right" }}>
            Submit
          </Button>
          <Link to="/Attendance&Roster">
            <Button variant="outlined" sx={{ float: "left" }}>
              Close
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default ApplyLeave;
