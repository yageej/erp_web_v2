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

const FormComponent = () => {
  const data = [
    {
      type: "text",
      label: "FirstName",
      placeholder: "Enter your First Name",
      onchange: "",
    },
    {
      type: "date",
      label: "Date",
      placeholder: "Enter your date",
      onchange: "",
    },
    {
      type: "number",
      label: "Number",
      placeholder: "Enter your Number",
      onchange: "",
    },
    {
      type: "email",
      label: "Email Address",
      placeholder: "Enter your Email",
      onchange: "",
    },
    {
      type: "select",
      label: "FirstName",
      placeholder: "Enter your First Name",
      onchange: "",
    },
  ];

  return (
    <>
      <FormControl></FormControl>
    </>
  );
};

export default FormComponent;
