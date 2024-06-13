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

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Attendance />}></Route>
          <Route path="/Home" element={<Attendance />}></Route>
          <Route path="/Tasks" element={<Tasks />}></Route>
          <Route path="/Tasks/Addtaskform" element={<AddTaskForm />}></Route>

          <Route path="/Documents" element={<Documents />}></Route>
          <Route
            path="/Attendance&Roster"
            element={<AttendanceandRoster />}
          ></Route>
          <Route
            path="/Course&Training"
            element={<CourseandTraining />}
          ></Route>
          <Route path="/Survey" element={<Survey />}></Route>
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
