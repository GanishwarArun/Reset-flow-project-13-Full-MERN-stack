import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="products" element={<Products />} />

      <Route path="cart" element={<Cart />} />
      {/* <Route path="*" element={<NotFound />} /> */}

      <Route path="*" element={<div className="h-full bg-blue-300 flex justify-center items-center">
        <h1 className="text-9xl font-bold">404 Something Went Wrong</h1>

      </div>
      }
      />


    </Routes>
  );
};
export default App;