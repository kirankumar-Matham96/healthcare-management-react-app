import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Profile } from "./pages/Profile";
import { Contacts } from "./pages/Contacts";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Dashboard } from "./pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
