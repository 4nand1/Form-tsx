"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CreditSection } from "./_components/CreditSection";
import { PrivacySection } from "./_components/PrivacySection";
import { PersonalSection } from "./_components/PersonalSection";
import { EndSection } from "./_components/EndSection";

export default function Home() {
  const [step, setStep] = useState(1);

  
  const [direction, setDirection] = useState<1 | -1>(1);

 
  const [formData, setFormData] = useState<FormData>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("form-data");
      if (saved) return JSON.parse(saved);
    }

    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
      profileImage: null, 
    };
  });

  
  const updateData = (values: Partial<FormData>) =>
    setFormData((prev) => {
      const updated = { ...prev, ...values };

      
      localStorage.setItem("form-data", JSON.stringify(updated));

      return updated;
    });

 
  const next = () => {
    setDirection(1);
    setStep((s) => s + 1);
  };

 
  const back = () => {
    setDirection(-1);
    setStep((s) => s - 1);
  };

  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-md">
        <AnimatePresence mode="wait">
          

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 40 * direction, rotate: 4 * direction }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -40 * direction, rotate: -4 * direction }}
              transition={{ duration: 0.25 }}
            >
              <CreditSection
                data={formData}
                updateData={updateData}
                goNext={next}
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 40 * direction, rotate: 4 * direction }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -40 * direction, rotate: -4 * direction }}
              transition={{ duration: 0.25 }}
            >
              <PrivacySection
                data={formData}
                updateData={updateData}
                goNext={next}
                goBack={back}
              />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 40 * direction, rotate: 4 * direction }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -40 * direction, rotate: -4 * direction }}
              transition={{ duration: 0.25 }}
            >
              <PersonalSection
                data={formData}
                updateData={updateData}
                goNext={next}
                goBack={back}
              />
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <EndSection />
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
