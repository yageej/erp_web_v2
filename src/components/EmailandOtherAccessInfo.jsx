import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import FadeRight from "../FadeRight";
import InputFieldComponent from "./InputFieldComponent";

const EmailandOtherAccessDetails = (props) => {
  const { title } = props;
  const animationClass = FadeRight();

  const inputFieldProps = [
    {
      id: 0,
      label: "Notification Email ID",
      value: "geejay.argarin@probegroup.com.ph",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
    {
      id: 1,
      label: "MS Email ID",
      value: "geejay.argarin@probegroup.com.ph",
      placeholder: "",
      rows: "1",
      isDisabled: false,
    },
    {
      id: 2,
      label: "Access Card ID",
      value: "2121212121",
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
              disabled={inpf.isDisabled}
              id={inpf.id}
              key={key}
            />
          ))}
          {/* // sample line of code if inputfieldcomponent is not used */}
          {/* <InputLabel id="demo-simple-select-label" sx={{ marginTop: 1 }}>
            Seniority Date
          </InputLabel>
          <TextField
            labelId="demo-simple-select-label"
            variant="outlined"
            fullWidth
            size="small"
            sx={{ width: 600, marginTop: 1 }}
          />{" "} */}
          <Button sx={{ marginTop: 3, float: "right" }} variant="outlined">
            Update
          </Button>
        </Box>
      </div>
    </>
  );
};

export default EmailandOtherAccessDetails;
