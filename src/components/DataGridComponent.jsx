// Reusable DataGrid Component

import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataGridComponent = (props) => {
  const { rows, columns } = props;

  return (
    <>
      <div style={{ height: "400", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          sx={{ ".MuiDataGrid-columnSeparator": { display: "none" } }}
        />
      </div>
    </>
  );
};

export default DataGridComponent;
