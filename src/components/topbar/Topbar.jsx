import React from "react";
import "./Topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
function Topbar() {
  return (
    <div className="Topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dashbord ♥️</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topbarIconBadget">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topbarIconBadget">En</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <div className="topbarAvatorWrapper">
            <img src="images/avator.jpeg" alt="" className="topbarAvator" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
