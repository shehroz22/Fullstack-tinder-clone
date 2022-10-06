import React from "react";
import "./Header.css";
import Person2Icon from "@mui/icons-material/Person2";
import { IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
function header() {
  return (
    <div className="header">
      <IconButton>
        <Person2Icon fontSize="large" className="header_icon" />
      </IconButton>
      <img
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-emblem.jpg"
        alt="logo"
        className="header_logo"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  );
}

export default header;
