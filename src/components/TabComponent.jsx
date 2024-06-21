import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DataGridComponent from "./DataGridComponent";

const TabComponent = (props) => {
  const {
    value,
    handleChange,
    teamrows,
    rows,
    mycolumns,
    teamcolumns,
    children,
  } = props;

  return (
    <>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label={
                <span>
                  <strong>My Task</strong>
                </span>
              }
              value="1"
            />
            <Tab
              label={
                <span>
                  <strong>Team Task</strong>
                </span>
              }
              value="2"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <DataGridComponent rows={rows} columns={mycolumns} />
        </TabPanel>
        <TabPanel value="2">
          <DataGridComponent rows={teamrows} columns={teamcolumns} />
        </TabPanel>
      </TabContext>
    </>
  );
};

export default TabComponent;
