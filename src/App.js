import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Box, CircularProgress, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import theme from "theme";
import Main from "pages/Main/Main";
import MainLayout from "layouts/MainLayout/MainLayout";

const ProductDetails = lazy(() =>
  import(
    /* webpackChunkName: "Product Details" */
    "pages/ProductDetails/ProductDetails"
  )
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/registration" element={<Registration />} /> */}
            <Route path="/" element={<Main />} />
            <Route
              path="/products/:id"
              element={
                <Suspense
                  fallback={
                    <Box
                      sx={{
                        display: "flex",
                        height: "100vh",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CircularProgress />
                    </Box>
                  }
                >
                  <ProductDetails />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
