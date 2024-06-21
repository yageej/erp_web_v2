import { useState } from "react";
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

const CreateTask = () => {
  const [tasks, setTasks] = useState(["Sample Task 1"]);
  const [newTask, setNewTask] = useState("");

  const [taskType, setTaskType] = useState("");
  const [startdate, setStartdate] = useState("---");
  const [enddate, setEnddate] = useState("---");
  const [priority, setPriority] = useState("");
  const [assignto, setAssignto] = useState("");
  const [description, setDescription] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }
  function addTask() {
    setTasks((t) => [...tasks, newTask]);
    setNewTask("");

    const taskList = [
      {
        taskname: tasks,
        taskType: taskType,
        startdate: startdate,
        enddate: enddate,
        prio: priority,
        assignnee: assignto,
        description: description,
      },
    ];

    console.log(taskList);
  }
  function deleteTask(index) {}

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
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Task Name"
        variant="outlined"
        value={newTask}
        onChange={handleInputChange}
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Task Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Task Type"
          value={taskType}
          onChange={handleTaskTypeChange}
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
          value={priority}
          label="Task Type"
          onChange={handlePriority}
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
          value={assignto}
          label="Task Type"
          onChange={handleAssignnee}
        >
          <MenuItem value="..">..</MenuItem>

          <MenuItem value="Employee 1">Employee 1</MenuItem>
          <MenuItem value="Employee 2">Employee 2</MenuItem>
          <MenuItem value="Employee 3">Employee 3</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        id="outlined-basic"
        label="Description"
        variant="outlined"
        multiline
        rows={4}
        maxRows={6}
        onChange={handleDescription}
      />
      <ol>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ol>

      <br />

      <Button variant="contained" onClick={addTask}>
        Add Task
      </Button>
    </>
  );
};

export default CreateTask;
