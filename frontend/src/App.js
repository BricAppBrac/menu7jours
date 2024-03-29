import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeMenu from "./pages/HomeMenu";
import HomeListeRecettes from "./pages/HomeListeRecettes";
import PageNewRecipe from "./pages/PageNewRecipe";
import HomeListeRecettesSecurisee from "./pages/HomeListeRecettesSecurisee";
import PageDetailsRecipe from "./pages/PageDetailsRecipe";
import PageDetailsEdit from "./pages/PageDetailsEdit";
import PageDetailsRecipeProtect from "./pages/PageDetailsRecipeProtect";
import MenusValides from "./pages/MenusValides";
import PageListeCourses from "./pages/PageListeCourses";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomeListeRecettes />} />
        <Route
          path="/PrivateRoute/HomeListeRecettesProtect"
          element={<HomeListeRecettesSecurisee />}
        />
        <Route path="/homemenu" element={<HomeMenu />} />
        <Route path="/PrivateRoute/pagenewrecipe" element={<PageNewRecipe />} />
        <Route
          path="/PrivateRoute/pagedetailsedit"
          element={<PageDetailsEdit />}
        />
        <Route path="/pagedetailsrecipe" element={<PageDetailsRecipe />} />
        <Route
          path="/PrivateRoute/pagedetailsrecipeprotect"
          element={<PageDetailsRecipeProtect />}
        />
        <Route path="/menusvalides" element={<MenusValides />} />
        <Route path="/listecourses" element={<PageListeCourses />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
