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

const EmergencyContactInfo = (props) => {
  const { title } = props;
  const animationClass = FadeRight();
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
      <div className={animationClass}>
        <h4>{title}</h4>
        <Box sx={{ width: 800, margin: 3 }}>
          <InputLabel id="demo-simple-select-label" sx={{ marginTop: 1 }}>
            Contact name
          </InputLabel>
          <TextField
            labelId="demo-simple-select-label"
            variant="outlined"
            fullWidth
            size="small"
            sx={{ width: 600, marginTop: 1, marginLeft: 2 }}
          />
          <InputLabel id="demo-simple-select-label" sx={{ marginTop: 1 }}>
            Contact Number
          </InputLabel>
          <TextField
            labelId="demo-simple-select-label"
            variant="outlined"
            fullWidth
            size="small"
            sx={{ width: 600, marginTop: 1, marginLeft: 2 }}
          />
          <InputLabel id="demo-simple-select-label" sx={{ marginTop: 1 }}>
            Land Line Number
          </InputLabel>
          <TextField
            labelId="demo-simple-select-label"
            variant="outlined"
            fullWidth
            size="small"
            sx={{ width: 600, marginTop: 1, marginLeft: 2 }}
          />{" "}
          <InputLabel id="demo-simple-select-label" sx={{ marginTop: 1 }}>
            Address
          </InputLabel>
          <TextField
            labelId="demo-simple-select-label"
            variant="outlined"
            fullWidth
            size="small"
            placeholder="Enter Emergency Contact Address here.."
            multiline
            rows={4}
            sx={{ width: 600, marginTop: 1, marginLeft: 2 }}
          />
          <InputLabel id="demo-simple-select-label" sx={{ marginTop: 1 }}>
            Contact Relation
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
            <MenuItem value="Parent ">Parent</MenuItem>
            <MenuItem value="Guardian ">Guardian</MenuItem>
            <MenuItem value="Sibling ">Sibling</MenuItem>
          </Select>
          <Button sx={{ marginLeft: 4, marginTop: 1 }} variant="outlined">
            Update
          </Button>
        </Box>
      </div>
    </>
  );
};

export default EmergencyContactInfo;
