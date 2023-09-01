import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

const Cart = (props) => {
  const { open, onClose } = props;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsInLS =
      JSON.parse(localStorage.getItem("__ada-shop:cart"))?.list || [];
    setProducts(productsInLS);
    window.addEventListener("storage", () => {
      const productsInLS =
        JSON.parse(localStorage.getItem("__ada-shop:cart"))?.list || [];
      setProducts(productsInLS);
    });
  }, []);

  const handleDelete = (product) => {
    const filteredProducts = products.filter((item) => {
      if (item.id === product.id && item.size === product.size) {
        return false;
      } else return true;
    });

    const dataInLS = JSON.parse(localStorage.getItem("__ada-shop:cart")) || {
      totalQuantity: 0,
      list: [],
    };

    setProducts(filteredProducts);
    localStorage.setItem(
      "__ada-shop:cart",
      JSON.stringify({
        totalQuantity: dataInLS.totalQuantity - product.quantity,
        list: filteredProducts,
      })
    );
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>TITLE</DialogTitle>
      <DialogContent>
        {products.map((item) => (
          <Box>
            <Typography>{item.title}</Typography>
            <Button onClick={() => handleDelete(item)}>Delete</Button>
          </Box>
        ))}
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

Cart.propTypes = {};

export default Cart;
