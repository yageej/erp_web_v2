import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import DataGridComponent from "./DataGridComponent";
import DatePickerComponent from "./DatePickerComponent";

const Schedule = () => {
  const columns = [
    { field: "scheduledate", headerName: "Schedule Date", width: 160 },
    { field: "status", headerName: "Status", width: 140 },

    { field: "startdate", headerName: "IN", width: 200 },
    { field: "enddate", headerName: "OUT", width: 200 },
  ];

  const rows = [
    {
      id: 1,
      scheduledate: "2024-06-01",
      date: "2024-06-01",
      status: "Approved",
      startdate: "2024-06-01 06:30:00 AM",
      enddate: "2024-06-01 03:30:00 PM",
    },
  ];

  // This is for Apply Leave Drawer
  const handleChange2 = (event) => {
    setLeaveType(event.target.value);
  };

  const [leavetype, setLeaveType] = React.useState("");

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
        <DatePickerComponent dptitle="Schedule Date" />

        <FormControl sx={{ m: 1, width: "20ch" }} size="small">
          <InputLabel id="demo-select-small-label">Status</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={leavetype}
            onChange={handleChange2}
            label="Status"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Assigned">Assigned</MenuItem>
            <MenuItem value="Accepted">Accepted</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </Select>
          <br />
        </FormControl>
      </Box>

      <DataGridComponent rows={rows} columns={columns} />
    </>
  );
};

export default Schedule;
