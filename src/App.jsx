import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" h-screen w-full flex  flex-col items-center justify-center text-3xl font-bold">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />

          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
