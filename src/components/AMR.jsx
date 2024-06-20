import React from "react";

import Box from "@mui/material/Box";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DataGridComponent from "./DataGridComponent";
import DatePickerComponent from "./DatePickerComponent";

const AMR = () => {
  const columns = [
    { field: "amrid", headerName: "AMR-ID", width: 100 },
    { field: "amrtype", headerName: "AMR type", width: 100 },
    { field: "date", headerName: "Date", width: 100 },
    { field: "status", headerName: "Status", width: 100 },
    { field: "approver", headerName: "Approver", width: 100 },
  ];

  const rows = [
    {
      id: 1,
      amrid: 2000213213,
      date: "2024-06-01",
      amrtype: "No Schedule",
      status: "Pending Approval",
      approver: "GJ Argarin",
    },
  ];
  return (
    <>
      <DatePickerComponent dptitle="AMR Date" />
      <br />
      <DataGridComponent rows={rows} columns={columns} />
    </>
  );
};

export default AMR;
