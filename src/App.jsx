import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Component/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Hire from "./pages/Hire";

const App = () => {
  return (
    <div className="bg-gray text-neutral-300  overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
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
