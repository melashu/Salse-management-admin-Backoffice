import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import "./Navbar.scss";
import user from "../../images/linkedin.jpg";
import { appUseDispatch } from "../../common/Hooks";
import { toggle } from "../../redux/rootreducer";
const Navbar = () => {
  const dispatch = appUseDispatch();
  return (
    <div className="navbar">
      <div className="search">
        <SearchIcon className="icon" />
        <input type="search" placeholder="search" />
      </div>
      <ul className="items">
        <li className="item">
          <LanguageIcon className="icon" />
          English
        </li>
        <li className="item">
          <DarkModeOutlinedIcon
            className="icon"
            onClick={() => {
              dispatch(toggle());
            }}
          />
        </li>
        <li className="item">
          <FullscreenExitOutlinedIcon />
        </li>
        <li className="item">
          <NotificationsNoneOutlinedIcon className="icon" />
          <div className="counter">5</div>
        </li>
        <li className="item">
          <ChatBubbleOutlineOutlinedIcon className="icon" />
          <div className="counter">2</div>
        </li>
        <li className="item">
          <ListOutlinedIcon className="icon" />
        </li>
        <li className="item">
          <div className="profle">
            <img src={user} alt="user" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
