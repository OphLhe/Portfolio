import { useState } from "react";
import "./App.css";
import "./index.css";
import LoadingScreen from "../components/LoadingScreen.jsx";
import HomePage from "../components/HomePage.jsx";
import ProjectsPage from "../components/ProjectsPage.jsx";
import TrainingsPage from "../components/TrainingsPage.jsx";
import SkillsPage from "../components/SkillsPage.jsx";
import ContactPage from "../components/ContactPage.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route index element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/trainings" element={<TrainingsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <AnimatePresence>
        {loading ? (
          <LoadingScreen onFadeOut={() => setLoading(false)} />
        ) : (
          <AppRoutes />
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
