import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
// import PropTypes from "prop-types";

const Container = styled(Box)(() => ({
  maxWidth: "1440px",
  margin: "0 auto",
}));

const MainLayout = (props) => {
  return (
    <Container>
      <Header />

      <Outlet />
      <Box
        sx={{ px: { xs: "16px", lg: "100px" }, transform: "translateY(50%)" }}
      >
        <Banner />
      </Box>
      <Footer />
    </Container>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
