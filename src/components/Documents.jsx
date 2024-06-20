import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DataGridComponent from "./DataGridComponent";
import { Button } from "@mui/material";
import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";

const Documents = (props) => {
  const renderActionButton = (p) => {
    return (
      <Button variant="outlined">
        <DriveFileRenameOutlineTwoToneIcon fontSize="small" />
      </Button>
    );
  };
  const { title } = props;
  const columns = [
    { field: "title", headerName: "Title", width: 200 },
    { field: "department", headerName: "Department", width: 130 },
    { field: "type", headerName: "Type", width: 130 },
    { field: "category", headerName: "Category", width: 130 },
    { field: "subcategory", headerName: "Sub-Category", width: 130 },
    { field: "dateofsign", headerName: "Date of Sign", width: 130 },
    { field: "recorddate", headerName: "Record Date", width: 130 },

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
      title: "Govt ID",
      department: "IT",
      type: "PVC Card",
      category: "Company ID",
      subcategory: "Company ID",
      dateofsign: "2024-06-11",
      recorddate: "2024-06-01",
    },
    {
      id: 3,
      title: "Govt ID",
      department: "IT",
      type: "PVC Card",
      category: "Company ID",
      subcategory: "Company ID",
      dateofsign: "2024-06-11",
      recorddate: "2024-06-01",
    },
    {
      id: 4,
      title: "Govt ID",
      department: "IT",
      type: "PVC Card",
      category: "Company ID",
      subcategory: "Company ID",
      dateofsign: "2024-06-11",
      recorddate: "2024-06-01",
    },
    {
      id: 5,
      title: "Govt ID",
      department: "IT",
      type: "PVC Card",
      category: "Company ID",
      subcategory: "Company ID",
      dateofsign: "2024-06-11",
      recorddate: "2024-06-01",
    },
    {
      id: 6,
      title: "Govt ID",
      department: "IT",
      type: "PVC Card",
      category: "Company ID",
      subcategory: "Company ID",
      dateofsign: "2024-06-11",
      recorddate: "2024-06-01",
    },
    {
      id: 7,
      title: "Govt ID",
      department: "IT",
      type: "PVC Card",
      category: "Company ID",
      subcategory: "Company ID",
      dateofsign: "2024-06-11",
      recorddate: "2024-06-01",
    },
    {
      id: 8,
      title: "Govt ID",
      department: "IT",
      type: "PVC Card",
      category: "Company ID",
      subcategory: "Company ID",
      dateofsign: "2024-06-11",
      recorddate: "2024-06-01",
    },
    {
      id: 9,
      title: "Govt ID",
      department: "IT",
      type: "PVC Card",
      category: "Company ID",
      subcategory: "Company ID",
      dateofsign: "2024-06-11",
      recorddate: "2024-06-01",
    },
    {
      id: 10,
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
      <h3>{title}</h3>
      <DataGridComponent rows={rows} columns={columns} />
    </>
  );
};

export default Documents;
