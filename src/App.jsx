import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Component/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Hire from "./pages/Hire";

const App = () => {
  return (
    <div className="bg-stone-900 font-['Poppins'] text-neutral-300  overflow-hidden ">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="Portfolio" element={<Portfolio />} />
            <Route path="about" element={<About />} />
            <Route path="hire" element={<Hire />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
