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
import SelectFieldComponent from "./SelectFieldComponent";
import InputFieldComponent from "./InputFieldComponent";

const JobInfo = (props) => {
  const { title } = props;
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

  const inputFieldProps = [
    {
      id: 0,
      label: "Employee Rank",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
    {
      id: 1,
      label: "Job Profile Category",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: false,
    },
    {
      id: 2,
      label: "Job Profile",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
    {
      id: 3,
      label: "Employee Grade",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
    {
      id: 4,
      label: "Employee Level",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
    {
      id: 5,
      label: "Designation",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
    {
      id: 6,
      label: "Employment Term",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
    {
      id: 7,
      label: "ManHour Type",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
    {
      id: 8,
      label: "Employee Type",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
    {
      id: 9,
      label: "Priviledge",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
    {
      id: 10,
      label: "RAG Status",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
  ];
  return (
    <>
      <h4>{title}</h4>

      <Box sx={{ width: "40rem", margin: 3 }}>
        {inputFieldProps.map((inpf, key) => (
          <InputFieldComponent
            label={inpf.label}
            pl={inpf.placeholder}
            rows={inpf.rows}
            value={inpf.value}
            disabled={inpf.isDisabled}
            id={inpf.id}
            key={key}
          />
        ))}

        <Button sx={{ marginTop: 2, float: "right" }} variant="outlined">
          Update
        </Button>
        {/* 
  inputlable: "Contact Relation",
value: "",
onChange: "",
menuitem: ["Parent", "Guardian", "Sibling"], */}
      </Box>
    </>
  );
};

export default JobInfo;
