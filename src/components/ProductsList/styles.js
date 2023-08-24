import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ProductsListContainer = styled(Box)(({ theme }) => ({
  padding: "0 100px",
  fontSize: "20px",
  [theme.breakpoints.down("sm")]: {
    padding: "0 15px",
  },
}));
