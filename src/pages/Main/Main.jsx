import React, { useCallback, useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import { Box } from "@mui/material";
import API from "../../requester";
import NewProducts from "./components/NewProducts/NewProducts";
import TopProducts from "./components/TopProducts/TopProducts";
// import PropTypes from "prop-types";

const Main = (props) => {
  const [newProducts, setNewProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const response = await API.get("products", { params: { limit: 100 } });
    const filterNewProducts = response.data.products.filter(
      (item) => item.discountPercentage < 4 && item.rating < 4.95
    );
    const filterTopProducts = response.data.products.filter(
      (item) => item.rating > 4.95 && item.discountPercentage > 4
    );
    setNewProducts(filterNewProducts);
    setTopProducts(filterTopProducts);
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Box>
      <Hero />
      <NewProducts products={newProducts} />
      <TopProducts products={topProducts} />
    </Box>
  );
};

Main.propTypes = {};

export default Main;
