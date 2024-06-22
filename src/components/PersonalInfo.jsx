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
import FadeRight from "../FadeRight";
import DatePickerComponent from "./DatePickerComponent";

const PersonalInfo = (props) => {
  const { title } = props;
  const animationClass = FadeRight();
  // This is for select options element
  const [gender, setGender] = React.useState("");

  const handleChange2 = (event) => {
    setGender(event.target.value);
  };

  const [bloodtype, setBloodType] = React.useState("");

  const handleChange1 = (event) => {
    setBloodType(event.target.value);
  };

  const [civilstatus, setCivilstatus] = React.useState("");

  const handleChange4 = (event) => {
    setCivilstatus(event.target.value);
  };
  return (
    <>
      <h4>{title}</h4>

      <Box sx={{ width: 800, marginleft: 5, margin: 3 }}>
        <InputLabel id="demo-simple-select-label" sx={{ marginTop: 1 }}>
          First Name
        </InputLabel>
        <TextField
          size="small"
          sx={{ width: 600, marginTop: 1, marginLeft: 2 }}
        />
        <InputLabel id="demo-simple-select-label" sx={{ marginTop: 1 }}>
          Middle Name
        </InputLabel>
        <TextField
          size="small"
          disabled
          sx={{ width: 600, marginTop: 1, marginLeft: 2 }}
        />
        <InputLabel id="demo-simple-select-label" sx={{ marginTop: 1 }}>
          Last Name
        </InputLabel>
        <TextField
          size="small"
          disabled
          sx={{ width: 600, marginTop: 1, marginLeft: 2 }}
        />
        <InputLabel id="demo-simple-select-label" sx={{ marginTop: 1 }}>
          Suffix
        </InputLabel>
        <TextField
          size="small"
          disabled
          sx={{ width: 600, marginTop: 1, marginLeft: 2 }}
        />
        <InputLabel id="demo-simple-select-label" sx={{ marginTop: 1 }}>
          Date of Birth
        </InputLabel>

        <Box sx={{ width: 600, marginTop: 1, marginLeft: 2 }}>
          <DatePickerComponent dptitle="Date of Birth" />
        </Box>

        <InputLabel id="demo-simple-select-label" sx={{ marginTop: 1 }}>
          Gender
        </InputLabel>
        <Select
          size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Leave Type"
          value={gender}
          onChange={handleChange2}
          sx={{ width: 600, marginTop: 1, marginLeft: 2 }}
        >
          <MenuItem value=" Male">Male</MenuItem>
          <MenuItem value=" Female">Female</MenuItem>
        </Select>

        <InputLabel id="demo-simple-select-label" sx={{ marginTop: 1 }}>
          Blood Type
        </InputLabel>
        <Select
          size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Blood Type"
          value={bloodtype}
          onChange={handleChange1}
          sx={{ width: 600, marginTop: 1, marginLeft: 2 }}
        >
          <MenuItem value="A">A</MenuItem>
          <MenuItem value="AB">AB</MenuItem>
          <MenuItem value="C">C</MenuItem>
        </Select>

        <InputLabel id="demo-simple-select-label" sx={{ marginTop: 1 }}>
          Civil Status
        </InputLabel>
        <Select
          size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Civil Status"
          value={civilstatus}
          onChange={handleChange4}
          sx={{ width: 600, marginTop: 1, marginLeft: 2 }}
        >
          <MenuItem value="Single ">Single</MenuItem>
          <MenuItem value="Married ">Married</MenuItem>
          <MenuItem value="Widowed ">Widowed</MenuItem>
          <MenuItem value="Separated ">Separated</MenuItem>
        </Select>

        <Button sx={{ marginLeft: 4, marginTop: 1 }} variant="outlined">
          Update
        </Button>
      </Box>
    </>
  );
};

export default PersonalInfo;
