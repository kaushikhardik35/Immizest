import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProgressiveFlow from "./Pages/ProgressiveFlow";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/web-progressive-flow/*" element={<ProgressiveFlow />} />
      {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />{" "} */}
      {/* This route will catch any undefined routes */}
    </Routes>
  );
}

export default App;
