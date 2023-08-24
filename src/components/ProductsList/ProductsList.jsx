import React, { useState } from "react";
import PropTypes from "prop-types";

import { Box, Button, Collapse, Grid } from "@mui/material";

import ProductCard from "components/ProductCard/ProductCard";
import { Title } from "globalStyles";

import { ProductsListContainer } from "./styles";

const ProductsList = (props) => {
  const { title, products } = props;

  const [isViewAll, setIsViewAll] = useState(false);

  const mainProducts = products.filter((item, index) => index <= 3);
  const additionalProducts = products.filter((item, index) => index >= 4);
  console.log("additionalProducts: ", additionalProducts);

  const togglewViewAll = () => {
    setIsViewAll((open) => !open);
  };

  return (
    <ProductsListContainer>
      <Title
        align="center"
        component="h2"
        sx={{
          transition: "0.4s",
          mt: { lg: "72px", xs: "50px" },
          mb: { lg: "55px", xs: "32px" },
        }}
      >
        {title}
      </Title>

      <Grid container justifyContent="space-around" spacing={4}>
        {mainProducts.map((item) => (
          <Grid key={item.id} item xs={6} md={3} lg={3}>
            <ProductCard product={item} />
          </Grid>
        ))}
      </Grid>
      <Collapse in={isViewAll}>
        <Grid container justifyContent="space-around" spacing={4}>
          {additionalProducts.map((item) => (
            <Grid key={item.id} item xs={6} md={3} lg={3}>
              <ProductCard product={item} />
            </Grid>
          ))}
        </Grid>
      </Collapse>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Button
          sx={{
            color: "black",
            borderRadius: "62px",
            border: "1px solid rgba(0, 0, 0, 0.10)",
          }}
          variant="outlined"
          onClick={togglewViewAll}
        >
          {isViewAll ? "Close" : "View All"}
        </Button>
      </Box>
    </ProductsListContainer>
  );
};

ProductsList.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductsList;
