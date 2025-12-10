"use client";

import { useState } from "react";
import { CreditSection } from "./_components/CreditSection";
import { PrivacySection } from "./_components/PrivacySection";


export default function Home() {
  // step state-ээ энд зарлана
  const [step, setStep] = useState(1);

  return (
    <>
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f3f4f6] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">


      {step === 1 && <CreditSection setStep={setStep} />}
      {step === 2 && <PrivacySection setStep={setStep} />}
      {step === 3 && <PersonalSection setStep={setStep} />}

      </div>
    </div>
    </>
  );
}
