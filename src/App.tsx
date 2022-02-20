import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import './global/styles/fonts.scss'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
