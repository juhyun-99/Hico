import React from "react";
import { Outlet } from "react-router-dom";
const mainparent = () => {
    
    return (
    <div>
        <Outlet/>
    </div>
    
    );
};

export default mainparent;