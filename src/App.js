import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
// import Login from "./pages/Login/Login";
// import Registration from "./pages/Registration/Registration";
import ProductDetails from "./pages/Products/ProductDetails";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import Main from "./pages/Main/Main";

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
