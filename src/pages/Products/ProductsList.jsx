import React from "react";
import { Outlet } from "react-router-dom";
// import PropTypes from "prop-types";

const ProductsList = (props) => {
  return (
    <div>
      ProductsList
      <Outlet />
    </div>
  );
};

ProductsList.propTypes = {};

export default ProductsList;
