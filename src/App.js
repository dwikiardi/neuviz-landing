import React from "react";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Product from "./Components/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Pricing />
      <Product />
    </div>
  );
}

export default App;
