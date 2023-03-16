import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeMenu from "./pages/HomeMenu";
import HomeListeRecettes from "./pages/HomeListeRecettes";
import PageNewRecipe from "./pages/PageNewRecipe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomeListeRecettes />} />
        <Route path="/homemenu" element={<HomeMenu />} />
        <Route path="/PrivateRoute/pagenewrecipe" element={<PageNewRecipe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
