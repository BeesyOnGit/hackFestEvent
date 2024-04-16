import Navbar from "./Component/SIdeBar/SIdebar";
import React from "react";
import SIdebar from "./Component/SIdeBar/SIdebar";
import { Route, Routes } from "react-router-dom";
function App() {
    return (
        <div>
            <SIdebar />
            <div>
                <Routes>
                    {/* Not protected Routes */}
                    {/* Home Page */}
                    <Route path="/" element={<></>} />
                    {/* login Page */}
                    <Route path="/login" element={<></>} />

                    {/* Protected Routes */}
                    {/* Prof Dash board */}
                    <Route path="/prof" element={<></>}>
                        <Route path="" element />
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
