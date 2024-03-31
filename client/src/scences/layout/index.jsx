import { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";

const Layout = () => {
  const [] = useState();
  return (
    <Box width="100%" height="100%">
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default Layout;
