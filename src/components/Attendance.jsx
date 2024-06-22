import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MyImage from "../assets/att2.png";
import AnimationPerRoute from "../AnimationPerRoute";

const Attendance = () => {
  const animationClass = AnimationPerRoute();

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <>
      <div className={animationClass}>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <div>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="520"
                    //   width="500"
                    image={MyImage}
                    alt="attendance"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                    ></Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    ></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <Grid container spacing={0.5}>
              <Grid item xs={8}>
                <h2>
                  &nbsp;&nbsp; Attendance For Sunday, June 9, 2024
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </h2>
              </Grid>
              <Grid item xs={4}>
                <h6>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Not your Working Schedule? <a href="">Click here</a>
                </h6>
              </Grid>
            </Grid>

            <div>
              <Grid container spacing={0.5}>
                <Grid item xs={3}>
                  <Card sx={{ minWidth: 5 }}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 11 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Current Time
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  {" "}
                  <Card sx={{ minWidth: 5 }}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 11 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Schedule Start
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  {" "}
                  <Card sx={{ minWidth: 5 }}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 11 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Schedule End
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  {" "}
                  <Card sx={{ minWidth: 5 }}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 11 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Current Status
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={3}>
            <Accordion defaultExpanded>
              <AccordionSummary
                className="accordion-header"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Action Items
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Code</TableCell>
                        <TableCell>Name</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Under Maintenance</TableCell>
                        <TableCell>Under Maintenance</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <br />
            <Accordion defaultExpanded className="accordion-header">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Upcoming Payout
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Code</TableCell>
                        <TableCell>Name</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Under Maintenance</TableCell>
                        <TableCell>Under Maintenance</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Attendance;
