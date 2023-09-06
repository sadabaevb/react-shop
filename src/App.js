import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Box, CircularProgress, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import theme from "theme";
import Main from "pages/Main/Main";
import MainLayout from "layouts/MainLayout/MainLayout";
import ProductsList from "pages/ProductsList/ProductsList";
import { Provider } from "react-redux";
import store from "store";
import Registration from "pages/Registration/Registration";

const ProductDetails = lazy(() =>
  import(
    /* webpackChunkName: "Product Details" */
    "pages/ProductDetails/ProductDetails"
  )
);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/registration" element={<Registration />} />
            <Route element={<MainLayout />}>
              <Route path="/" element={<Main />} />
              <Route path="/products" element={<ProductsList />} />
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
    </Provider>
  );
}

export default App;
