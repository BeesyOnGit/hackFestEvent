import React from "react";
import { Route, Routes } from "react-router-dom";
import Notes from "./Pages/Profs/Notes/Notes";
import Sidebar from "./Component/SIdeBar/Sidebar.jsx";

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
                    <Route path="/prof" element={<></>}>
                        <Route path="notes" element={<Notes />} />
                        <Route path="reservation-lab" element={<></>} />
                        <Route path="feed" element={<></>} />
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
