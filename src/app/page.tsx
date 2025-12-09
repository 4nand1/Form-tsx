import Image from "next/image";
import { CreditSection } from "./_components/CreditSection";
import { PrivacySection } from "./_components/PrivacySection";

export default function Home() {
  return (
    
     {step === 1 && <CreditSection />}
     {step === 2 && <PrivacySection />}
     { step === 3 && <}
  
  );
}
