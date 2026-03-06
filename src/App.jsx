import { useState } from "react";
import "./App.css";
import "./index.css";
import LoadingScreen from "../components/LoadingScreen";
import HomePage from "../components/HomePage";
import ProjectsPage from "../components/ProjectsPage";
import TrainingsPage from "../components/TrainingsPage";
import SkillsPage from "../components/SkillsPage";
import ContactPage from "../components/ContactPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

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
      <SpeedInsights />
    </Router>
  );
}

export default App;
