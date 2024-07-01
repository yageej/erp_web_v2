import React from "react";
import { useState } from "react";
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
import data from "../data/data.json";

const PersonalInfo = (props) => {
  const { title } = props;
  const animationClass = FadeRight();

  // const selectMenuValues = [
  //   {
  //     id: 0,
  //     inputlabel: "Gender",
  //     value: civilstatus,
  //     onChange: handleChange4,
  //     menuitem: ["Male", "Female", "Prefer Not To Say"],
  //   },
  //   {
  //     id: 2,
  //     inputlabel: "Blood Type",
  //     value: civilstatus,
  //     onChange: handleChange4,
  //     menuitem: ["A", "B", "AB", "O"],
  //   },
  //   {
  //     id: 3,
  //     inputlabel: "Civil Status",
  //     value: civilstatus,
  //     onChange: handleChange4,
  //     menuitem: ["Single", "Married", "Widowed"],
  //   },
  // ];

  // for (let i in data) {
  //   console.log(`this is the result: `, data[i].type);
  // }

  const [state, newState] = useState(data);

  // console.log(state);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.value]: value,
    });
  };

  // console.log(dataset.id);
  // console.log(dataset);
  // console.log(data);
  const dataField = data.map((d) =>
    d.type !== "select" ? (
      <React.Fragment key={d.id}>
        <InputLabel id={d.label} sx={{ marginTop: 1 }}>
          {d.label}
        </InputLabel>
        <TextField
          defaultValue=""
          type={d.type}
          sx={{ width: 350, marginTop: 1 }}
          InputLabelProps={{ shrink: true }}
          pl={d.placeholder}
          rows={d.rows}
          value={state.value}
          disabled={d.isDisabled}
          size="small"
          onChange={handleChange}
        />
      </React.Fragment>
    ) : (
      <React.Fragment key={d.id}>
        <InputLabel id={d.label} sx={{ marginTop: 1 }}>
          {d.label}
        </InputLabel>
        <Select
          defaultValue=""
          size="small"
          labelid={d.label}
          id="demo-simple-select"
          value={d.id}
          onChange={handleChange}
          sx={{ width: 350, marginTop: 1 }}
        >
          {d.options.map((m, i) => (
            <MenuItem value={m} key={i}>
              {m}
            </MenuItem>
          ))}
        </Select>
      </React.Fragment>
    )
  );
  {
    /* <InputFieldComponent
        label={d.label}
        pl={d.placeholder}
        rows={d.rows}
        value={d.value}
        disabled={d.isDisabled}
        id={d.id}
        key={key}
        type={`${`"` + d.type + `"`}`}
      />
      {console.log(typeof d.type, d.type)}
      {console.log(`type={"${d.type}"}`)}
      {console.log(`${`"` + d.type + `"`}`)} */
  }

  {
    /* <TextField type={d.type} /> */
  }
  // console.log(data[0].label); -- correct
  // const formfields = JSON.stringify(data);
  // console.log(` this an object`, data[0]);
  // const formfieldsdata = JSON.stringify(data);
  // console.log(formfieldsdata);

  // const inputFieldProps = [
  //   {
  //     id: 0,
  //     label: "First Name",
  //     value: "",
  //     placeholder: "",
  //     rows: "1",
  //     isDisabled: true,
  //   },
  //   {
  //     id: 1,
  //     label: "Middle Name",
  //     value: "",
  //     placeholder: "",
  //     rows: "1",
  //     isDisabled: false,
  //   },
  //   {
  //     id: 2,
  //     label: "Last Name",
  //     value: "",
  //     placeholder: "",
  //     rows: "1",
  //     isDisabled: true,
  //   },
  //   {
  //     id: 3,
  //     label: "Suffix",
  //     value: "",
  //     placeholder: "",
  //     rows: "1",
  //     isDisabled: true,
  //   },
  // ];
  return (
    <>
      <h4>{title}</h4>
      <Box sx={{ width: "40rem", margin: 3 }}>
        {/* using map()  */}
        {dataField}

        {/* {data.map((inpf, key) => (
          <InputFieldComponent
            label={inpf.label}
            pl={inpf.placeholder}
            rows={inpf.rows}
            value={inpf.value}
            disabled={inpf.isDisabled}
            id={inpf.id}
            key={key}
            type={inpf.type}
          />
        ))} */}

        {/* <Box sx={{ marginTop: 1 }}>
          <DatePickerComponent dptitle="Date of Birth" />
        </Box> */}
        {/* {data.map((s, key) => (
          <SelectFieldComponent
            il={s.label}
            val={s.value}
            oc={s.onChange}
            menu={s.options}
            id={s.id}
            key={key}
          />
        ))} */}
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

export default PersonalInfo;
