import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LogoutIcon from "@mui/icons-material/Logout";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import { appUseDispatch } from "../../common/Hooks";
import { darkMode, lightMode } from "../../redux/rootreducer";
const Sidebar = () => {
  const dispatch = appUseDispatch();
  return (
    <div className="sidebar">
      <div className="top">
        <NavLink to="/">
          <span className="logo">MDS Back office</span>
        </NavLink>
      </div>
      <hr />
      <div className="center">
        <ul>
          <span className="title">MAIN</span>
          <li>
            <Link to="/">
              <DashboardIcon className="icon" />
              Dashboard
            </Link>
          </li>
          <span className="title">Lists</span>
          <li>
            <NavLink to="users">
              <PeopleAltIcon className="icon" />
              Users
            </NavLink>
          </li>{" "}
          <li>
            <Link to="products">
              {" "}
              <Inventory2Icon className="icon" />
              Products
            </Link>
          </li>{" "}
          <li>
            <Link to="orders">
              <CardMembershipIcon className="icon" />
              Order
            </Link>
          </li>{" "}
          <li>
            <Link to="delivery">
              <LocalShippingIcon className="icon" />
              Delivery
            </Link>
          </li>{" "}
          <span className="title">Useful</span>
          <li>
            <Link to="stats">
              <QueryStatsIcon className="icon" />
              Stats
            </Link>
          </li>{" "}
          <li>
            <Link to="notification">
              {" "}
              <NotificationsIcon className="icon" />
              Notfication
            </Link>
          </li>
          <span className="title">Service</span>
          <li>
            <Link to="health">
              <SettingsSystemDaydreamIcon className="icon" />
              System Health
            </Link>
          </li>{" "}
          <li>
            <Link to="logs">
              <PsychologyIcon className="icon" />
              Logs
            </Link>
          </li>{" "}
          <span className="title">User</span>
          <li>
            <Link to="settings">
              <SettingsIcon className="icon" />
              Settings
            </Link>
          </li>{" "}
          <li>
            <Link to="profile">
              <AccountCircleIcon className="icon" />
              Profile
            </Link>
          </li>{" "}
          <li>
            <Link to="logout">
              <LogoutIcon className="icon" />
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="title">Themes</div>

      <div className="bottom">
        <div className="colorOption" onClick={() => {
          dispatch(lightMode());
        }}></div>
        <div className="colorOption" onClick={() => {
          dispatch(darkMode());
        }}></div>
      </div>
    </div>
  );
};

export default Sidebar;
