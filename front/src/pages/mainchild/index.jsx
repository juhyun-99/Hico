import React from "react";
import { Outlet } from "react-router-dom";
const mainchild = () => {
    
    return (
        <div>
        <Outlet/>
    </div>
    );
};

export default mainchild;