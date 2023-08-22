import React from "react";
// import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../../../../components/ProductCard/ProductCard";

const NewProducts = (props) => {
  const { products } = props;
  console.log("products: ", products);
  return (
    <Box>
      <Typography
        align="center"
        variant="h2"
        sx={{ fontFamily: "Integral CF Regular", my: 5 }}
      >
        NEW ARRIVALS
      </Typography>

      <Grid container justifyContent="space-around" spacing={2}>
        {products.map((item) => (
          <Grid key={item.id} item xs={12} md={4} lg={3}>
            <ProductCard product={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

NewProducts.propTypes = {};

export default NewProducts;
