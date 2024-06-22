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

const AddressInfo = (props) => {
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

  const selectMenuValues = [
    {
      id: 2,
      inputlabel: "Province",
      value: civilstatus,
      onChange: handleChange4,
      menuitem: ["Province 1", "Province 2", "Province 3"],
    },
    {
      id: 1,
      inputlabel: "City",
      value: civilstatus,
      onChange: handleChange4,
      menuitem: ["City A", " City B", " City C", "City D"],
    },
    {
      id: 0,
      inputlabel: "Barangay",
      value: civilstatus,
      onChange: handleChange4,
      menuitem: ["Barangay 1", "Barangay 2", "Barangay 3"],
    },
  ];

  const inputFieldProps = [
    {
      id: 0,
      label: "Address",
      value: "",
      placeholder: "Enter your Permanent Address here...",
      rows: "4",
      isDisabled: true,
    },
    {
      id: 1,
      label: "Zip Code",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
  ];
  return (
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
      </Box>
    </div>
  );
};

export default AddressInfo;
