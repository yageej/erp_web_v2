import React from "react";

import Box from "@mui/material/Box";

import { DataGrid } from "@mui/x-data-grid";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
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
      {" "}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={["DatePicker"]}
          sx={{
            "& > :not(style)": { m: 1, width: "10ch" },
          }}
        >
          <DatePicker
            label="AMR Date"
            slotProps={{ textField: { size: "small" } }}
          />
        </DemoContainer>
      </LocalizationProvider>
      <br />
      <div style={{ height: 400, width: "95%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </>
  );
};

export default AMR;
