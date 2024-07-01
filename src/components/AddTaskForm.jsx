import React, { useEffect, useState } from "react";
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
import { Button, useStepContext } from "@mui/material";
import { Link, redirect } from "react-router-dom";
import FadeRight from "../FadeRight";
import AnimationPerRoute from "../AnimationPerRoute";
import FadeInBottom from "../FadeInBottom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTaskForm = (props) => {
  const animationClass = FadeInBottom();
  const url = "http://localhost:3000/api/tasks";

  const { title } = props;

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const [taskType, setTaskType] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [priority, setPriority] = useState("");
  const [assignto, setAssignto] = useState("");
  const [description, setDescription] = useState("");
  const [isTeamTask, setIsTeamTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    setTasks((t) => [...tasks, newTask]);
    setNewTask("");

    const taskList = [
      {
        taskname: newTask,
        taskType: taskType,
        startdate: startdate,
        enddate: enddate,
        prio: priority,
        assignnee: assignto,
        description: description,
        isTeamTask: isTeamTask,
      },
    ];

    axios
      .post(url, {
        // id: 14,
        taskname: tasks,
        taskType: taskType,
        prio: priority,
        // assignnee: assignto,
        // description: description,
        isTeamTask: isTeamTask,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(`Task Details Submitted!`, taskList);
    alert("New Task has been Submitted...");
  }

  // function deleteTask(index) {}

  function handleTaskTypeChange(e) {
    setTaskType(e.target.value);
  }
  function handleStartDate(e) {
    setStartdate(e.target.value);
  }

  function handleEndDate(e) {
    setEnddate(e.target.value);
  }
  function handlePriority(e) {
    setPriority(e.target.value);
  }
  function handleAssignnee(e) {
    setAssignto(e.target.value);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleTaskassignment(e) {
    setIsTeamTask(e.target.value);
  }

  return (
    <div className={animationClass}>
      <h3>{title}</h3>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100ch" },
          marginLeft: 30,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Task Name"
          variant="outlined"
          onChange={handleInputChange}
          value={newTask}
          required
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-taskType">Task Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select-taskType"
            label="Task Type"
            value={taskType}
            required
            onChange={handleTaskTypeChange}
          >
            <MenuItem value={10}>..</MenuItem>

            <MenuItem value="Task 1">Task 1</MenuItem>
            <MenuItem value="Task 2">Task 2</MenuItem>
            <MenuItem value="Task 3">Task 3</MenuItem>
          </Select>
        </FormControl>
        {/* 
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DatePicker"]}
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" },
            }}
          >
            <DatePicker label="Start Date" onChange={handleStartDate} />
            <DatePicker label="End Date" onChange={handleEndDate} />
          </DemoContainer>
        </LocalizationProvider> */}

        <TextField
          type="date"
          id="outlined-startdate"
          label="Start Date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          onChange={handleStartDate}
          value={startdate}
        />
        <TextField
          type="date"
          id="outlined-enddate"
          // label="End Date"
          variant="outlined"
          label="End Date"
          onChange={handleEndDate}
          InputLabelProps={{ shrink: true }}
          value={enddate}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label-priority">
            Priority
          </InputLabel>
          <Select
            labelId="demo-simple-select-label-priority"
            id="demo-simple-select-label-priority"
            value={priority}
            label="Task Type"
            onChange={handlePriority}
            required
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium </MenuItem>
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Urgent">Urgent</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="select-label-assignTo">Assign To</InputLabel>
          <Select
            labelId="demo-simple-select-assignTo"
            id="select-label-assignTo"
            value={assignto}
            label="Task Type"
            onChange={handleAssignnee}
            required
          >
            <MenuItem value="..">..</MenuItem>

            <MenuItem value="Employee 1">Employee 1</MenuItem>
            <MenuItem value="Employee 2">Employee 2</MenuItem>
            <MenuItem value="Employee 3">Employee 3</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select">is Team Task?</InputLabel>
          <Select
            labelId="select-label-isteamTask"
            id="demo-simple-select"
            value={isTeamTask}
            label="Task Type"
            onChange={handleTaskassignment}
            required
          >
            <MenuItem value="..">..</MenuItem>

            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="Description"
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          onChange={handleDescription}
        />

        <Box sx={{ float: "center" }}>
          <Link to="/Tasks">
            <Button variant="outlined">Cancel</Button> &nbsp;
          </Link>
          <Link to="/Tasks">
            <Button variant="contained" onClick={addTask}>
              Add Task
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default AddTaskForm;
