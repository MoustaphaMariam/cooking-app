import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./views/Listing";
import Listing from "./views/Favorites";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="*" element={<Listing />} />
        <Route path="/Favorites" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
