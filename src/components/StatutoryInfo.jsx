import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import FadeRight from "../FadeRight";
import InputFieldComponent from "./InputFieldComponent";

const StatutoryInfo = (props) => {
  const { title } = props;
  const animationClass = FadeRight();

  const inputFieldProps = [
    {
      id: 0,
      label: "SSS ",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
    {
      id: 1,
      label: "TIN",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: false,
    },
    {
      id: 2,
      label: "PhilHealth",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
    {
      id: 3,
      label: "Pag-ibig",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
    {
      id: 4,
      label: "Tax Status",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
    {
      id: 5,
      label: "Bank",
      value: "",
      placeholder: "",
      rows: "1",
      isDisabled: true,
    },
    {
      id: 6,
      label: "Bank Account Number",
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
              disabled={inpf.isDisabled}
              id={inpf.id}
              key={key}
            />
          ))}

          <Button sx={{ marginTop: 3, float: "right" }} variant="outlined">
            Update
          </Button>
        </Box>
      </div>
    </>
  );
};

export default StatutoryInfo;
