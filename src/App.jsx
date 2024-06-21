import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Attendance from "./components/Attendance";
import Layout from "./components/Layout";
import Tasks from "./components/Tasks";
import Documents from "./components/Documents";
import AttendanceandRoster from "./components/AttendanceandRoster";
import CourseandTraining from "./components/CourseandTraining";
import Survey from "./components/Survey";
import MyProfile from "./components/MyProfile";
import IncidentReport from "./components/IncidentReport";
import Termination from "./components/Termination";
import MyATDApproval from "./components/MyATDApproval";
import Resignation from "./components/Resignation";
import ReturnToWorkOrder from "./components/ReturnToWorkOrder";
import AddTaskForm from "./components/AddTaskForm";
import ViewCourse from "./components/ViewCourse";
import CreateTask from "./components/CreateTask";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Attendance />}></Route>
          <Route
            path="/Home"
            element={<Attendance title="Attendance" />}
          ></Route>
          <Route path="/Tasks" element={<Tasks title="Tasks" />}></Route>
          <Route
            path="/Tasks/AddTaskForm"
            element={<AddTaskForm title="Add Task Form" />}
          ></Route>
          <Route
            path="/Documents"
            element={<Documents title="Documents" />}
          ></Route>
          <Route
            path="/Attendance&Roster"
            element={<AttendanceandRoster title="Attendance & PTO" />}
          ></Route>
          <Route
            path="/Course&Training"
            element={<CourseandTraining title="Courses" />}
          ></Route>{" "}
          <Route
            path="/Course&Training/View-Course"
            element={<ViewCourse />}
          ></Route>
          <Route path="/Survey" element={<Survey title="Survey" />}></Route>
          <Route path="/MyProfile" element={<MyProfile />}></Route>
          <Route path="/IncidentReport" element={<IncidentReport />}></Route>
          <Route path="/Termination" element={<Termination />}></Route>
          <Route path="/MyATDApproval" element={<MyATDApproval />}></Route>
          <Route path="/Resignation" element={<Resignation />}></Route>
          <Route
            path="/ReturnToWorkOrder"
            element={<ReturnToWorkOrder />}
          ></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
