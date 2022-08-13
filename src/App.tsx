import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Items from "./features/items";
import Locations from "./features/locations";
import Pokemon from "./features/pokemon";
import Pokemons from "./features/pokemons";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/items" element={<Items />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
