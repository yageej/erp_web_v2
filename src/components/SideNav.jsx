import React from "react";
import "../index.css";
import { styled, useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Collapse from "@mui/material/Collapse";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import HelpIcon from "@mui/icons-material/Help";
import Attendance from "./Attendance";
import ListIcon from "@mui/icons-material/List";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import HomeIcon from "@mui/icons-material/Home";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import TaskIcon from "@mui/icons-material/Task";
import TaskTwoToneIcon from "@mui/icons-material/TaskTwoTone";
import TopicIcon from "@mui/icons-material/Topic";
import PunchClockIcon from "@mui/icons-material/PunchClock";
import PunchClockTwoToneIcon from "@mui/icons-material/PunchClockTwoTone";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import ModelTrainingTwoToneIcon from "@mui/icons-material/ModelTrainingTwoTone";
import PollIcon from "@mui/icons-material/Poll";
import SpaceDashboardTwoToneIcon from "@mui/icons-material/SpaceDashboardTwoTone";
import Brightness5TwoToneIcon from "@mui/icons-material/Brightness5TwoTone";
import { TopicTwoTone } from "@mui/icons-material";
import TopicTwoToneIcon from "@mui/icons-material/TopicTwoTone";
import PollTwoToneIcon from "@mui/icons-material/PollTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import ReportProblemTwoToneIcon from "@mui/icons-material/ReportProblemTwoTone";
import PersonRemoveTwoToneIcon from "@mui/icons-material/PersonRemoveTwoTone";
import FactCheckTwoToneIcon from "@mui/icons-material/FactCheckTwoTone";
import PersonOffTwoToneIcon from "@mui/icons-material/PersonOffTwoTone";
import AssuredWorkloadTwoToneIcon from "@mui/icons-material/AssuredWorkloadTwoTone";
import PeopleTwoToneIcon from "@mui/icons-material/PeopleTwoTone";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";

const SideNav = (props) => {
  const [openList, setOpenList] = React.useState(false);
  const [openList1, setOpenList1] = React.useState(false);

  const handleClick = () => {
    setOpenList(!openList);
    setOpen(true);
  };
  const handleClick2 = () => {
    setOpenList1(!openList1);
    setOpen(true);
  };
  const handleClick3 = () => {
    setOpenList(!openList);
    setOpen(true);
  };
  const handleClick4 = () => {
    setOpenList(!openList);
    setOpen(true);
  };
  const handleClick5 = () => {
    setOpenList(!openList);
    setOpen(true);
  };
  const handleClick6 = () => {
    setOpenList(!openList);
    setOpen(true);
  };
  const handleClick7 = () => {
    setOpenList(!openList);
    setOpen(true);
  };
  const handleClick8 = () => {
    setOpenList(!openList);
    setOpen(true);
  };
  const handleClick9 = () => {
    setOpenList(!openList);
    setOpen(true);
  };
  const handleClick10 = () => {
    setOpenList(!openList);
    setOpen(true);
  };
  const handleClick11 = () => {
    setOpenList(!openList);
    setOpen(true);
  };
  const handleClick12 = () => {
    setOpenList(!openList);
    setOpen(true);
  };

  const drawerWidth = 290;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),

    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={props.class}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open} sx={{ bgcolor: "#3c4454" }}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <ListIcon />
              </IconButton>
              <Typography variant="h5" noWrap component="div">
                ERP <LanguageTwoToneIcon />
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                <Brightness5TwoToneIcon /> &nbsp; BEEPO 2.0
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <MenuOpenRoundedIcon />
                )}
              </IconButton>
            </DrawerHeader>

            <List
              sx={{
                width: "100%",
                maxWidth: 500,
                bgcolor: "background.paper",
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              // subheader={
              //   <ListSubheader component="div" id="nested-list-subheader">
              //     ERP Web 2.0
              //   </ListSubheader>
              // }
            >
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <SpaceDashboardTwoToneIcon />
                </ListItemIcon>
                <ListItemText className="list-item-text" primary="Dashboard" />
                {openList ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openList} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/Home"
                  >
                    <ListItemButton sx={{ pl: 4 }} selected>
                      <ListItemIcon>
                        <HomeTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText className="list-item-text" primary="Home" />
                    </ListItemButton>
                  </Link>

                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/Tasks"
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <TaskTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText
                        className="list-item-text"
                        primary="Tasks"
                      />
                    </ListItemButton>
                  </Link>

                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/Documents"
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <TopicTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText
                        className="list-item-text"
                        primary="Documents"
                      />
                    </ListItemButton>
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/Attendance&Roster"
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <PunchClockTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText
                        className="list-item-text"
                        primary="Attendance & Roster"
                      />
                    </ListItemButton>
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/Course&Training"
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <ModelTrainingTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText
                        className="list-item-text"
                        primary="Course/Training"
                      />
                    </ListItemButton>
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/Survey"
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <PollTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText
                        className="list-item-text"
                        primary="Survey"
                      />
                    </ListItemButton>
                  </Link>

                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/MyProfile"
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <AccountCircleTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText
                        className="list-item-text"
                        primary="My Profile"
                      />
                    </ListItemButton>
                  </Link>

                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/IncidentReport"
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <ReportProblemTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText
                        className="list-item-text"
                        primary="Incident Report"
                      />
                    </ListItemButton>
                  </Link>

                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/Termination"
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <PersonRemoveTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText
                        className="list-item-text"
                        primary="Termination"
                      />
                    </ListItemButton>
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/MyATDApproval"
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <FactCheckTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText
                        className="list-item-text"
                        primary="My ATD Approval"
                      />
                    </ListItemButton>
                  </Link>

                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/Resignation"
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <PersonOffTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText
                        className="list-item-text"
                        primary="Resignation"
                      />
                    </ListItemButton>
                  </Link>

                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/ReturnToWorkOrder"
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <AssuredWorkloadTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText
                        className="list-item-text"
                        primary="Return to Work Order"
                      />
                    </ListItemButton>
                  </Link>

                  <Divider />
                </List>
              </Collapse>

              <ListItemButton onClick={handleClick2}>
                <ListItemIcon>
                  <PeopleTwoToneIcon />
                </ListItemIcon>
                <ListItemText
                  className="list-item-text"
                  primary="Employee Management"
                />
                {openList1 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openList1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link style={{ textDecoration: "none" }} to="/Home">
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText className="list-item-text" primary="Home" />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>

              <ListItemButton>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText
                  className="list-item-text"
                  primary="Finance Management"
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText className="list-item-text" primary="Course" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText
                  className="list-item-text"
                  primary="HMO Management"
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText className="list-item-text" primary="Documents" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText
                  className="list-item-text"
                  primary="Master Data"
                />
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText
                  className="list-item-text"
                  primary="Teams Management"
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText
                  className="list-item-text"
                  primary="Survey Management"
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText
                  className="list-item-text"
                  primary="Client Management"
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText
                  className="list-item-text"
                  primary="Talent Management"
                />
              </ListItemButton>
            </List>
            <Divider />

            {/* <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText className="list-item-text" primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <hr />
                <>{props.children}</>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default SideNav;
