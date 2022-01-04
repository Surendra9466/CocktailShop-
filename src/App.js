import React from "react";
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import SingleCocktail from './pages/SingleCocktail';
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default function App() {
  return <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cocktail/:id" element={<SingleCocktail />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>;
}
