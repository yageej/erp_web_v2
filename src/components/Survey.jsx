import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Survey = () => {
  const columns = [
    { field: "surveytitle", headerName: "Survey Title", width: 200 },
    { field: "enddate", headerName: "End Date", width: 130 },
    { field: "status", headerName: "Status", width: 130 },

    {
      field: "Action",
      headerName: "Action",
      //   type: "number",
      width: 90,
    },
  ];

  const rows = [
    {
      id: 2,
      surveytitle: "Survey sample",

      enddate: "2024-06-11",
      status: "Expired",
    },
  ];
  return (
    <div>
      {" "}
      <h3>Survey</h3>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 3 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </div>
  );
};

export default Survey;
