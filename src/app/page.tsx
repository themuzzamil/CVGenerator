// pages/index.tsx (or app/page.tsx if using App Router)
"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CVProvider, useCVContext } from "@/contexts/CVContext";
import Navbar from "@/app/components/navbar";
import TemplateSelector from "@/app/components/TemplateSelector";
import CVForm from "@/app/components/form";
import CVPreview from "@/app/components/CVPreview";

function CVGeneratorContent() {
  const { currentStep } = useCVContext();

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "template":
        return <TemplateSelector />;
      case "form":
        return <CVForm />;
      case "preview":
        return <CVPreview />;
      default:
        return <TemplateSelector />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderCurrentStep()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <CVProvider>
      <div className="min-h-screen bg-black text-white font-sans">
        <AnimatePresence>
          {showSplash ? (
            <motion.div
              key="splash"
              className="flex items-center justify-center h-screen bg-black"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div className="text-center">
                <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-4"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  CV Generator
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Create stunning professional resumes in minutes
                </motion.p>
                <motion.div
                  className="mt-8 flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <CVGeneratorContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </CVProvider>
  );
}
