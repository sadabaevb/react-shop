import React, { useCallback, useEffect, useState } from "react";
// import PropTypes from "prop-types";

import { Box } from "@mui/material";

import API from "requester";
import ProductsList from "components/ProductsList/ProductsList";

import Hero from "./components/Hero/Hero";
import Reviews from "./components/Reviews/Reviews";

const Main = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [reviews, setReviews] = useState([]);

  const getReviews = useCallback(async () => {
    const response = await API.get("quotes");
    setReviews(response.data.quotes);
  }, []);

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

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  return (
    <Box>
      <Hero />
      <ProductsList title="New Arrivals" products={newProducts} />
      <Box sx={{ mt: 5 }}>
        <ProductsList title="Top Selling" products={topProducts} />
      </Box>
      <Box sx={{ mt: { xs: 1, lg: 5 }, mb: { xs: "-200px", lg: 0 } }}>
        <Reviews list={reviews} />
      </Box>
    </Box>
  );
};

Main.propTypes = {};

export default Main;
