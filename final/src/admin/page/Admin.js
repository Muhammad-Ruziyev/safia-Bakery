import React from "react";
import Sidebar from "../components/Sidebar";
import "./admin.scss";
import { Link } from "react-router-dom";
import { BsFillBellFill, BsFillCalendarFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { AiFillMessage, AiOutlineSearch } from "react-icons/ai";

const Admin = ({ children }) => {
  return <div className="admin bg-color">{children}</div>;
};

export default Admin;
