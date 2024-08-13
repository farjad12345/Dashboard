import React from "react";
import "./Sidbar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutline from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutline from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/WorkOutline";import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { NavLink } from "react-router-dom";
function Sidbar() {
  return (
    <div className="sidbar">
      <div className="sidbarWrapper">
        <div className="sidbarMenu">
          <h3 className="sidbarTitle">Active Pages</h3>
          <ul className="sidebarList">
            <NavLink to="/" className="link sidebarListIteam ">
              <LineStyleIcon className="sidbarIcon" />
              Home
            </NavLink>
            <NavLink to="/users" className="link sidebarListIteam">

<PermIdentityIcon className="sidbarIcon" />
Users
</NavLink>
<NavLink to="/products" className="link sidebarListIteam">

<AttachMoneyIcon className="sidbarIcon" />
Products
</NavLink>
          </ul>
        </div>
        <div className="sidbarMenu">
          <h3 className="sidbarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink to="/" className="link sidebarListIteam ">
              <LineStyleIcon className="sidbarIcon" />
              Home
            </NavLink>
            <li className="sidebarListIteam">
              <TimelineIcon className="sidbarIcon" />
              Analytics
            </li>
            <li className="sidebarListIteam">
              <TrendingUpIcon className="sidbarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidbarMenu">
          <h3 className="sidbarTitle">Quick Menu</h3>
          <ul className="sidebarList">
          <NavLink to="/users" className="link sidebarListIteam">

              <PermIdentityIcon className="sidbarIcon" />
              Users
            </NavLink>
            <NavLink to="/newuser" className="link sidebarListIteam">

              <StorefrontIcon className="sidbarIcon" />
              New Users
            </NavLink>
            <NavLink to="/products" className="link sidebarListIteam">

              <AttachMoneyIcon className="sidbarIcon" />
              Products
            </NavLink>

            <li className="sidebarListIteam">
              <BarChartIcon className="sidbarIcon" />
              Transactions
            </li>
            <li className="sidebarListIteam">
              <MailOutline className="sidbarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidbarMenu">
          <h3 className="sidbarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListIteam ">
              <MailOutline className="sidbarIcon" />
              Mail
            </li>
            <li className="sidebarListIteam">
              <DynamicFeedIcon className="sidbarIcon" />
              Feedback
            </li>
            <li className="sidebarListIteam">
              <MessageOutlinedIcon className="sidbarIcon" />
              Message
            </li>
          </ul>
        </div>
        <div className="sidbarMenu">
          <h3 className="sidbarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListIteam ">
            <WorkOutlineIcon className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListIteam">
            <TimelineIcon className="sidebarIcon" />
            Analytics
            </li>
            <li className="sidebarListIteam">
            <ReportIcon className="sidebarIcon" />
            Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidbar;
