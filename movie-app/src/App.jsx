import { Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Contact";


function App() {
  return (
        <>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path='/favorites' element={<Favorites />}/>
              <Route path="/contact" element={<Contact />}/>
          </Routes>
        </>
    );
}

export default App;