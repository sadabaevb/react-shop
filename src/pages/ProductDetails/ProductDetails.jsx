import {
  Box,
  Breadcrumbs,
  Chip,
  CircularProgress,
  Rating,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import {
  ProductBaseImage,
  ProductBaseInfo,
  ProductDetailsContainer,
  ProductGallery,
  ProductListing,
  ProductSmallImage,
} from "./styles";
import NavigateNext from "@mui/icons-material/NavigateNext";
import { Link, useParams } from "react-router-dom";
import API from "requester";
import { Title } from "globalStyles";
// import PropTypes from "prop-types";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  console.log("product: ", product);
  const { id } = useParams();

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    >
      Shop
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    >
      {product?.category}
    </Link>,
    <Typography key="3" color="text.primary">
      {product?.brand}
    </Typography>,
  ];

  const getDetails = useCallback(async () => {
    const response = await API.get(`products/${id}`);
    setProduct(response.data);
    setCurrentImage(response.data.images[0]);
  }, [id]);

  useEffect(() => {
    getDetails();
  }, [getDetails]);

  const handleBaseImageChange = (image) => {
    setCurrentImage(image);
  };

  if (!product) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <ProductDetailsContainer>
      <Breadcrumbs
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>

      <ProductListing>
        <ProductGallery>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {product.images
              .filter((item, index) => index < 3)
              .map((image) => (
                <ProductSmallImage
                  src={image}
                  onClick={(event) => handleBaseImageChange(image)}
                />
              ))}
          </Box>
          <ProductBaseImage src={currentImage} />
        </ProductGallery>
        <ProductBaseInfo>
          <Title>{product.title}</Title>
          <Rating value={product.rating} />
          <Rating value={product.rating} />
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
          <Typography>{product.description}</Typography>
        </ProductBaseInfo>
      </ProductListing>
    </ProductDetailsContainer>
  );
};

ProductDetails.propTypes = {};

export default ProductDetails;
