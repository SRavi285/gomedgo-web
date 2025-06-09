import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "../src/layout/Header";
import Home from "../src/pages/Home";
import About from "../src/Pages/About";
import Contact from "../src/Pages/Contact";
import Footer from "../src/layout/Footer";
import ECareTaker from "./pages/ECareTaker";
import BabyCaretaker from "./pages/BabyCaretaker";
import AtHomeNurse from "./pages/AtHomeNurse";
import InjectionInfusions from "./pages/InjectionInfusions";
import ElderlyBathHygiene from "./pages/ElderlyBathHygiene";
import Dressing from "./pages/Dressing";
import Physiotherapy from "./pages/Physiotherapy";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
const AppContent = () => {
  const location = useLocation();
  const showLayout = location.pathname === "/" || location.pathname === "/home";

  return (
    <>
      {showLayout && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ECareTaker" element={<ECareTaker />} />
        <Route path="/BabyCaretaker" element={<BabyCaretaker />} />
        <Route path="/AtHomeNurse" element={<AtHomeNurse />} />
        <Route path="/InjectionInfusions" element={<InjectionInfusions />} />
        <Route path="/ElderlyBathHygiene" element={<ElderlyBathHygiene />} />
        <Route path="/Dressing" element={<Dressing />} />
        <Route path="/Physiotherapy" element={<Physiotherapy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {showLayout && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
