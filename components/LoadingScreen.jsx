import Lottie from "lottie-react";
import React from 'react'
import animationData from "../src/public/Logo.json";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onFadeOut }) => {
  const [fade, setFade] = useState(false);
  const containerRef = useRef(null);

  const handleAnimationComplete = () => {
    setFade(true);
    setTimeout(() => {
      if (onFadeOut) onFadeOut();
    }, 1000);
  };

  return (
    <>
      <motion.div
        ref={containerRef}
        className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-gray-950"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <Lottie
            animationData={animationData}
            loop={false}
            onComplete={handleAnimationComplete}
            className="h-48 w-48"
          />
        </div>
      </motion.div>
    </>
  );
};

export default LoadingScreen;
