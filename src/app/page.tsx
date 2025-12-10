"use client";

import { useState } from "react";
import { CreditSection } from "./_components/CreditSection";
import { PrivacySection } from "./_components/PrivacySection";
import { PersonalSection } from "./_components/PersonalSection";
import { EndSection } from "./_components/EndSection";

export type FormData = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  dateOfBirth: string;
  profileImage: File | null;
};

export default function Home() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    dateOfBirth: "",
    profileImage: null,
  });

  const updateFormData = (values: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...values }));
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f3f4f6] px-4">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md">
        {step === 1 && (
          <CreditSection
            data={formData}
            updateData={updateFormData}
            goNext={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <PrivacySection
            data={formData}
            updateData={updateFormData}
            goBack={() => setStep(1)}
            goNext={() => setStep(3)}
          />
        )}

        {step === 3 && (
          <PersonalSection
            data={formData}
            updateData={updateFormData}
            goBack={() => setStep(2)}
            goNext={() => setStep(4)}
          />
        )}

        {step === 4 && <EndSection />}
      </section>
    </main>
  );
}
