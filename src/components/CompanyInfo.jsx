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

import SelectFieldComponent from "./SelectFieldComponent";
import InputFieldComponent from "./InputFieldComponent";

const CompanyInfo = (props) => {
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
  const selectMenuValues = [
    {
      id: 0,
      inputlabel: "Gender",
      value: civilstatus,
      onChange: handleChange4,
      menuitem: ["Male", "Female", "Prefer Not To Say"],
    },
    {
      id: 2,
      inputlabel: "Blood Type",
      value: civilstatus,
      onChange: handleChange4,
      menuitem: ["A", "B", "AB", "O"],
    },
    {
      id: 3,
      inputlabel: "Civil Status",
      value: civilstatus,
      onChange: handleChange4,
      menuitem: ["Single", "Married", "Widowed"],
    },
  ];

  const inputFieldProps = [
    {
      id: 0,
      label: "Employee Code",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
    {
      id: 1,
      label: "Employee ID",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: false,
    },
    {
      id: 2,
      label: "Micro Resume Reference ID",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
    {
      id: 3,
      label: "Job Adder ID",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
  ];
  return (
    <>
      <div className={animationClass}>
        <h4>{title}</h4>
        <Box sx={{ width: "40rem", margin: 3 }}>
          {inputFieldProps.map((inpf, key) => (
            <InputFieldComponent
              label={inpf.label}
              pl={inpf.placeholder}
              rows={inpf.rows}
              value={inpf.value}
              id={inpf.id}
              disabled={inpf.isDisabled}
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
      </div>
    </>
  );
};

export default CompanyInfo;
