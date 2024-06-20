import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DataGridComponent from "./DataGridComponent";
import { Button } from "@mui/material";
import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";

const Survey = (props) => {
  const renderActionButton = (p) => {
    return (
      <Button variant="outlined">
        <DriveFileRenameOutlineTwoToneIcon fontSize="small" />
      </Button>
    );
  };
  const columns = [
    { field: "surveytitle", headerName: "Survey Title", width: 300 },
    { field: "enddate", headerName: "End Date", width: 330 },
    { field: "status", headerName: "Status", width: 330 },
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
      id: 2,
      surveytitle: "Survey sample",

      enddate: "2024-06-11",
      status: "Active",
    },
    {
      id: 3,
      surveytitle: "Survey sample",

      enddate: "2024-06-11",
      status: "Expired",
    },
    {
      id: 4,
      surveytitle: "Survey sample",

      enddate: "2024-06-11",
      status: "Active",
    },
    {
      id: 5,
      surveytitle: "Survey sample",

      enddate: "2024-06-11",
      status: "Expired",
    },
  ];
  return (
    <div>
      <h3>{props.title}</h3>
      <DataGridComponent rows={rows} columns={columns} />
    </div>
  );
};

export default Survey;
