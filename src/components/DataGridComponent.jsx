// Reusable DataGrid Component

import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import AnimationPerRoute from "../AnimationPerRoute";

const DataGridComponent = (props) => {
  const { rows, columns } = props;
  const animationClass = AnimationPerRoute();

  return (
    <>
      <div style={{ height: "500", width: "100%" }} className={animationClass}>
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
