import React from "react";
import Box from "@mui/material/Box";
import DataGridComponent from "./DataGridComponent";
import { Button } from "@mui/material";
import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";
import { styled } from "@mui/material/styles";

const MyDocumentDetails = (props) => {
  const { title } = props;

  const renderActionButton = (p) => {
    return (
      <Button variant="outlined" component="label">
        <DriveFileRenameOutlineTwoToneIcon fontSize="small" />{" "}
        <strong>Upload/View</strong>
        <VisuallyHiddenInput type="file" />
      </Button>
    );
  };
  const columns = [
    { field: "id", headerName: "ID", width: 130 },
    { field: "documentname", headerName: "Document Name", width: 320 },
    { field: "status", headerName: "Status", width: 240 },
    { field: "mandatory", headerName: "Mandatory", width: 200 },

    {
      field: "",
      headerName: "Action",
      width: 280,
      // valueGetter: actionModify,
      renderCell: renderActionButton,
    },
  ];

  const rows = [
    {
      id: 2,
      documentname: "Govt ID",
      status: "Approved",
      mandatory: "No",
    },
    {
      id: 3,
      documentname: "Personal ID",
      status: "No Documents available",
      mandatory: "No",
    },
    {
      id: 4,
      documentname: "Sample ID",
      status: "Approved",
      mandatory: "Yes",
    },
  ];

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <>
      <h3>{title}</h3>
      <Box>
        <DataGridComponent rows={rows} columns={columns} />
      </Box>
    </>
  );
};

export default MyDocumentDetails;
