import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import '../../../../css/admin.css'

function SideBar() {
  

  return (
    <div className="side-bar">
      <div className="side-group">
        <div className="dashboard">
          <a>Dashboard</a>
        </div>
      </div>
      <div className="side-group">
        <div className="dashboard">
          <a>Dashboard</a>
        </div>
      </div>
      <h1>Sidebar</h1>
    </div>
  );
}

export default SideBar;
