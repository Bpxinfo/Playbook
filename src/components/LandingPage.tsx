"use client";

import { motion } from "motion/react";
import React, { useState } from "react";
import { AuroraBackground } from "./ui/aurora-background.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Modal } from "./ui/modal";
import SignupFormDemo from "./signup-form-demo";

interface User {
  id: string;
  email: string;
  // Add other user properties as needed
}

interface AuthContextType {
  user: User | null;
  // Add other auth context properties as needed
}

const LandingPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth() as AuthContextType;
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleStartClick = () => {
    if (user) {
      navigate("/ccc-playbook");
    } else {
      setIsSignupModalOpen(true);
    }
  };

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Welcome to CCC Playbook
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Your comprehensive guide to success
        </div>
        <button 
          onClick={handleStartClick}
          className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-8 py-3 text-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Start Now
        </button>
      </motion.div>

      {/* Signup Modal */}
      <Modal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        title="Welcome to the CCC Playbook"
      >
        <SignupFormDemo onClose={() => setIsSignupModalOpen(false)} />
      </Modal>
    </AuroraBackground>
  );
};

export default LandingPage; 