import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Documents = () => {
  const columns = [
    { field: "title", headerName: "Title", width: 200 },
    { field: "department", headerName: "Department", width: 130 },
    { field: "type", headerName: "Type", width: 130 },
    { field: "category", headerName: "Category", width: 130 },
    { field: "subcategory", headerName: "Sub-Category", width: 130 },
    { field: "dateofsign", headerName: "Date of Sign", width: 130 },
    { field: "recorddate", headerName: "Record Date", width: 130 },

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
      title: "Govt ID",
      department: "IT",
      type: "PVC Card",
      category: "Company ID",
      subcategory: "Company ID",
      dateofsign: "2024-06-11",
      recorddate: "2024-06-01",
    },
  ];
  return (
    <>
      <h3>Documents</h3>
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
    </>
  );
};

export default Documents;
