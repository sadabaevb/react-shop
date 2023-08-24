import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ProductDetailsContainer = styled(Box)(({ theme }) => ({
  padding: "30px 100px",
  [theme.breakpoints.down("sm")]: {
    padding: "20px 16px",
  },
}));

export const ProductListing = styled(Box)(() => ({
  display: "flex",
}));
export const ProductGallery = styled(Box)(() => ({
  flexBasis: "50%",
  display: "flex",
}));
export const ProductBaseInfo = styled(Box)(() => ({
  flexBasis: "50%",
}));

export const ProductSmallImage = styled("img")(() => ({
  width: "152px",
  height: "157px",
  marginBottom: "14px",
  borderRadius: "20px",
  border: "1px solid #000",
}));

export const ProductBaseImage = styled("img")(() => ({
  width: "444px",
  height: "530px",
  marginLeft: "14px",
  borderRadius: "20px",
  transition: "1s",
}));
