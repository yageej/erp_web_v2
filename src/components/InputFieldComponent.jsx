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

const InputFieldComponent = (props) => {
  const { label, pl, rows, value, disabled, id } = props;
  return (
    <React.Fragment key={id}>
      <InputLabel id={label} sx={{ marginTop: 1 }}>
        {label}
      </InputLabel>

      <TextField
        labelid={label.toLowerCase()}
        variant="outlined"
        size="small"
        value={value}
        placeholder={pl}
        multiline
        rows={rows}
        disabled={disabled}
        sx={{ width: "inherit", marginTop: 1 }}
      />
    </React.Fragment>
  );
};

export default InputFieldComponent;
