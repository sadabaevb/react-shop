import React, { useState } from "react";
// import PropTypes from "prop-types";
import { Box, Button, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const AddToCart = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  console.log("quantity: ", quantity);

  const operation = (value) => {
    setQuantity((prevValue) => prevValue + value);
  };

  const handleSave = () => {
    const dataInLS = JSON.parse(localStorage.getItem("__ada-shop:cart")) || {
      totalQuantity: 0,
      list: [],
    };

    const sameProduct = dataInLS.list.find(
      (item) => item.id === product.id && item.size === product.size
    );

    if (sameProduct) {
      const newProducts = dataInLS.list.map((item) => {
        if (item.id === sameProduct.id && item.size === sameProduct.size) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        } else return item;
      });
      const newObj = {
        totalQuantity: dataInLS.totalQuantity + quantity,
        list: newProducts,
      };
      localStorage.setItem("__ada-shop:cart", JSON.stringify(newObj));
    } else {
      const newObj = {
        totalQuantity: dataInLS.totalQuantity + quantity,
        list: [...dataInLS.list, { ...product, quantity: quantity }],
      };
      localStorage.setItem("__ada-shop:cart", JSON.stringify(newObj));
    }

    window.dispatchEvent(new Event("storage"));
  };

  return (
    <Box display="flex">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        maxWidth="170px"
        sx={{ px: "20px", background: "#F0F0F0", borderRadius: "62px" }}
      >
        <IconButton disabled={quantity === 1} onClick={() => operation(-1)}>
          <RemoveIcon />
        </IconButton>
        <Typography>{quantity}</Typography>
        <IconButton onClick={() => operation(1)}>
          <AddIcon />
        </IconButton>
      </Box>

      <Button
        variant="contained"
        color="inherit"
        onClick={handleSave}
        sx={{
          borderRadius: "62px",
          background: "#000",
          px: "54px",
          py: "16px",
          color: "white",
        }}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

AddToCart.propTypes = {};

export default AddToCart;
