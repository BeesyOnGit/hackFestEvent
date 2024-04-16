import React from "react";
import { Route, Routes } from "react-router-dom";
import Notes from "./Pages/Profs/Notes/Notes";
import Sidebar from "./Component/SideBar/Sidebar.jsx";
import ReservationLab from "./Pages/Profs/Lab/ReservationLab.jsx";
import Feed from "./Pages/Profs/Feed/Feed.jsx";
import Prof from "./Pages/Profs/Prof.jsx";
import "./Index.css";
import "./App.css";

function App() {
    return (
        <div>
            <Sidebar />
            <div>
                <Routes>
                    {/* Not protected Routes */}

                    {/* Home Page */}
                    <Route path="/" element={<>Home</>} />

                    {/* login Page */}
                    <Route path="/login" element={<></>} />

                    {/* Protected Routes */}

                    {/* Prof Dash board */}
                    <Route path="/prof" element={<Prof />}>
                        <Route path="notes" element={<Notes />} />
                        <Route path="reservation-lab" element={<ReservationLab />} />
                        <Route path="feed" element={<Feed />} />
                    </Route>

                    {/* student Dash board */}
                    <Route path="/stud" element={<></>}>
                        <Route path="" element />
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
