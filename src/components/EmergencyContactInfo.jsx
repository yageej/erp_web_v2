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

const EmergencyContactInfo = (props) => {
  const inputFields = ["Contact Name", "Contact Number"];
  const selectFields = [
    {
      "Contact Relation": ["Parent", "Guardian"],
    },
  ];

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
      inputlabel: "Contact Relation",
      value: civilstatus,
      onChange: handleChange4,
      menuitem: ["Guardian", "Parent", "Sibling"],
    },
  ];

  const inputFieldProps = [
    {
      id: 0,
      label: "Contact Name",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
    {
      id: 1,
      label: "Contact Number",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: false,
    },
    {
      id: 2,
      label: "Land Line Number",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
    {
      id: 3,
      label: "Emergency Contact Address",
      value: "",
      placeholder: "",
      rows: "4",
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
              key={key}
              disabled={inpf.isDisabled}
            />
          ))}

          {selectMenuValues.map((s, key) => (
            <SelectFieldComponent
              il={s.inputlabel}
              val={s.value}
              oc={s.onChange}
              menu={s.menuitem}
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

export default EmergencyContactInfo;
