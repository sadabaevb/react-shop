import React from "react";
// import PropTypes from "prop-types";
import { Box, Chip, Rating, Typography } from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Box sx={{ maxWidth: "100%" }}>
      <img
        width="100%"
        height={298}
        src={product.thumbnail}
        alt={product.title}
      />
      <Typography fontWeight={700}>{product.title}</Typography>
      <Rating name="read-only" value={product.rating} readOnly />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography fontWeight={600} sx={{ mr: 1 }}>
          $
          {(
            product.price -
            (product.price * product.discountPercentage) / 100
          ).toFixed(2)}
        </Typography>
        <Typography
          sx={{
            color: "rgba(0, 0, 0, 0.40)",
            mr: 1,
            textDecoration: "line-through",
          }}
          variant="body1"
          fontWeight={400}
        >
          ${product.price}
        </Typography>
        <Chip
          sx={{ background: "rgba(255, 51, 51, 0.10)", color: "#F33" }}
          label={`-${product.discountPercentage}%`}
        />
      </Box>
    </Box>
  );
};

ProductCard.propTypes = {};

export default ProductCard;
