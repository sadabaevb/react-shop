import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import theme from "theme";
import Main from "pages/Main/Main";
import MainLayout from "layouts/MainLayout/MainLayout";
import ProductDetails from "pages/ProductDetails/ProductDetails";

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
            <Route path="/products/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
