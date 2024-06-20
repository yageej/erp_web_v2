import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DataGridComponent from "./DataGridComponent";
import DatePickerComponent from "./DatePickerComponent";
import { Button } from "@mui/material";
import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";

const TimeSheet = () => {
  const renderActionButton = (p) => {
    return (
      <Button variant="outlined">
        <DriveFileRenameOutlineTwoToneIcon fontSize="small" />
      </Button>
    );
  };
  const columns = [
    { field: "date", headerName: "Date", width: 100 },
    { field: "day", headerName: "Day", width: 100 },
    { field: "type", headerName: "Type", width: 100 },
    { field: "offsite", headerName: "Offsite", width: 100 },
    { field: "flexibleschedule", headerName: "Flexible Schedule", width: 100 },
    { field: "graceperiod", headerName: "Grace Period", width: 100 },
    { field: "schedule1", headerName: "Schedule", width: 100 },
    { field: "actual1", headerName: "Actual", width: 100 },
    { field: "schedule2", headerName: "Schedule", width: 100 },
    { field: "actual2", headerName: "Actual", width: 100 },
    { field: "schedule3", headerName: "Schedule", width: 100 },
    { field: "actual3", headerName: "Actual", width: 100 },

    {
      field: "",
      headerName: "Action",
      width: 100,
      // valueGetter: actionModify,
      renderCell: renderActionButton,
    },
  ];

  const rows = [
    {
      id: 1,
      date: "2024-06-01",
      day: "Monday",
      type: "No Schedule",
      offsite: "---",
      flexibleschedule: "---",
      graceperiod: "---",
      schedule1: "---",
      actual1: "---",
      schedule2: "---",
      actual2: "---",
      schedule3: "---",
      actual3: "---",
    },
    {
      id: 2,
      date: "2024-06-01",
      day: "Thursday",
      type: "No Schedule",
      offsite: "---",
      flexibleschedule: "---",
      graceperiod: "---",
      schedule1: "---",
      actual1: "---",
      schedule2: "---",
      actual2: "---",
      schedule3: "---",
      actual3: "---",
    },
    {
      id: 3,
      date: "2024-06-01",
      day: "Tuesday",
      type: "No Schedule",
      offsite: "---",
      flexibleschedule: "---",
      graceperiod: "---",
      schedule1: "---",
      actual1: "---",
      schedule2: "---",
      actual2: "---",
      schedule3: "---",
      actual3: "---",
    },
    {
      id: 4,
      date: "2024-06-01",
      day: "Monday",
      type: "No Schedule",
      offsite: "---",
      flexibleschedule: "---",
      graceperiod: "---",
      schedule1: "---",
      actual1: "---",
      schedule2: "---",
      actual2: "---",
      schedule3: "---",
      actual3: "---",
    },
    {
      id: 5,
      date: "2024-06-01",
      day: "Wednesday",
      type: "No Schedule",
      offsite: "---",
      flexibleschedule: "---",
      graceperiod: "---",
      schedule1: "---",
      actual1: "---",
      schedule2: "---",
      actual2: "---",
      schedule3: "---",
      actual3: "---",
    },
    {
      id: 6,
      date: "2024-06-01",
      day: "Saturday",
      type: "No Schedule",
      offsite: "---",
      flexibleschedule: "---",
      graceperiod: "---",
      schedule1: "---",
      actual1: "---",
      schedule2: "---",
      actual2: "---",
      schedule3: "---",
      actual3: "---",
    },

    {
      id: 7,
      date: "2024-06-01",
      day: "Monday",
      type: "No Schedule",
      offsite: "---",
      flexibleschedule: "---",
      graceperiod: "---",
      schedule1: "---",
      actual1: "---",
      schedule2: "---",
      actual2: "---",
      schedule3: "---",
      actual3: "---",
    },
    {
      id: 8,
      date: "2024-06-01",
      day: "Sunday",
      type: "No Schedule",
      offsite: "---",
      flexibleschedule: "---",
      graceperiod: "---",
      schedule1: "---",
      actual1: "---",
      schedule2: "---",
      actual2: "---",
      schedule3: "---",
      actual3: "---",
    },
    {
      id: 9,
      date: "2024-06-01",
      day: "Thursday",
      type: "No Schedule",
      offsite: "---",
      flexibleschedule: "---",
      graceperiod: "---",
      schedule1: "---",
      actual1: "---",
      schedule2: "---",
      actual2: "---",
      schedule3: "---",
      actual3: "---",
    },

    {
      id: 10,
      date: "2024-06-01",
      day: "Tuesday",
      type: "No Schedule",
      offsite: "---",
      flexibleschedule: "---",
      graceperiod: "---",
      schedule1: "---",
      actual1: "---",
      schedule2: "---",
      actual2: "---",
      schedule3: "---",
      actual3: "---",
    },
  ];
  return (
    <>
      <DatePickerComponent dptitle="Attendance Date" />
      <br />

      <DataGridComponent rows={rows} columns={columns} />
    </>
  );
};

export default TimeSheet;
