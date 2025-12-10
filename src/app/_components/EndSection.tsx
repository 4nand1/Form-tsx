"use client";

import { Header } from "./Header";

type EndSectionProps = {
  setStep: (step: number) => void;
};

export const EndSection = ({ setStep }: EndSectionProps) => {
  return (
    <div>

       

      <div className="flex items-center justify-center py-10">
        <div className="rounded-2xl border border-gray-200 bg-white px-10 py-12  shadow-sm">
            <img className="w-15 h-15" src="pinecone.png" alt="Pinecone logo" />
          <h1 className="mb-2 text-xl font-semibold">You're All Set 🔥</h1>
          <p className="text-sm text-gray-500">
            We have received your submission. Thank you!
          </p>
        </div>
      </div>
    </div>
  );
};
