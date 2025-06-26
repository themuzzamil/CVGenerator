"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { CVData, Template } from "@/types/cv";

interface CVContextType {
  cvData: CVData;
  setCVData: (data: CVData) => void;
  selectedTemplate: Template | null;
  setSelectedTemplate: (template: Template) => void;
  currentStep: "template" | "form" | "preview";
  setCurrentStep: (step: "template" | "form" | "preview") => void;
}

const defaultCVData: CVData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    website: "",
    summary: "",
    profileImage: "",
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
};

const CVContext = createContext<CVContextType | undefined>(undefined);

export function CVProvider({ children }: { children: ReactNode }) {
  const [cvData, setCVData] = useState<CVData>(defaultCVData);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );
  const [currentStep, setCurrentStep] = useState<
    "template" | "form" | "preview"
  >("template");

  return (
    <CVContext.Provider
      value={{
        cvData,
        setCVData,
        selectedTemplate,
        setSelectedTemplate,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </CVContext.Provider>
  );
}

export function useCVContext() {
  const context = useContext(CVContext);
  if (context === undefined) {
    throw new Error("useCVContext must be used within a CVProvider");
  }
  return context;
}
