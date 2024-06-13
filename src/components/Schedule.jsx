import React from "react";
import Box from "@mui/material/Box";

import { DataGrid } from "@mui/x-data-grid";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Schedule = () => {
  const columns = [
    { field: "scheduledate", headerName: "Schedule Date", width: 160 },
    { field: "status", headerName: "Status", width: 140 },

    { field: "startdate", headerName: "IN", width: 200 },
    { field: "enddate", headerName: "OUT", width: 200 },
  ];

  const rows = [
    {
      id: 1,
      scheduledate: "2024-06-01",
      date: "2024-06-01",
      status: "Approved",
      startdate: "2024-06-01 06:30:00 AM",
      enddate: "2024-06-01 03:30:00 PM",
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
            label="Schedule Date"
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

export default Schedule;
