import React from "react";
import Box from "@mui/material/Box";

import { DataGrid } from "@mui/x-data-grid";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const HolidayList = () => {
  const columns = [
    { field: "date", headerName: "Date", width: 160 },
    { field: "holidayname", headerName: "Holiday Name", width: 140 },

    { field: "description", headerName: "Description", width: 200 },
  ];

  const rows = [
    {
      id: 1,
      date: "2024-06-01",
      holidayname: "Sample holiday",
      description: "This is a test holiday",
    },
  ];
  return (
    <>
      <h5> Holidays</h5>
      <div style={{ height: 330, width: "95%" }}>
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

export default HolidayList;
