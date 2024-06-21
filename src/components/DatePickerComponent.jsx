import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const DatePickerComponent = (props) => {
  const { dptitle } = props;
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={["DatePicker"]}
          sx={{
            "& > :not(style)": { width: "10ch" },
          }}
        >
          <DatePicker
            label={dptitle}
            slotProps={{ textField: { size: "small" } }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
};

export default DatePickerComponent;
