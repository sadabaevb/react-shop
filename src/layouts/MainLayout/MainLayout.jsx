import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveDrawer from "../../components/Drawer/Drawer";
// import PropTypes from "prop-types";

const MainLayout = (props) => {
  return (
    <ResponsiveDrawer>
      <Outlet />
    </ResponsiveDrawer>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
