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

const AddTaskForm = () => {
  const [task, setTask] = React.useState("");
  const [task2, setTask2] = React.useState("");
  const [task3, setTask3] = React.useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const handleChange2 = (event) => {
    setTask2(event.target.value);
  };
  const handleChange3 = (event) => {
    setTask3(event.target.value);
  };
  return (
    <>
      <h3>Add Task Form</h3>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100ch" },
          marginLeft: 30,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Task Name" variant="outlined" />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Task Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={task}
            label="Task Type"
            onChange={handleChange}
          >
            <MenuItem value={10}>..</MenuItem>

            <MenuItem value="Task 1">Task 1</MenuItem>
            <MenuItem value="Task 2">Task 2</MenuItem>
            <MenuItem value="Task 3">Task 3</MenuItem>
          </Select>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DatePicker"]}
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" },
            }}
          >
            <DatePicker label="Start Date" />
            <DatePicker label="End Date" />
          </DemoContainer>
        </LocalizationProvider>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Priority</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={task2}
            label="Task Type"
            onChange={handleChange2}
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium </MenuItem>
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Urgent">Urgent</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Assign To</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={task3}
            label="Task Type"
            onChange={handleChange3}
          >
            <MenuItem value="..">..</MenuItem>

            <MenuItem value="Employee 1">Employee 1</MenuItem>
            <MenuItem value="Employee 2">Employee 2</MenuItem>
            <MenuItem value="Employee 3">Employee 3</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          maxRows={6}
        />

        <Box sx={{ float: "center" }}>
          <Link to="/Tasks">
            <Button variant="outlined">Cancel</Button> &nbsp;
          </Link>
          <Button variant="contained">Add Task</Button>
        </Box>
      </Box>
    </>
  );
};

export default AddTaskForm;
