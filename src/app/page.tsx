import Image from "next/image";
import { CreditSection } from "./_components/CreditSection";

export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="w-120 h-[655px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="  p-4 ">
          <div className="">
            <img src="pinecone.png" alt="Pinecone Logo" className="  w-15 h-15 mx-auto mt-8" />
            <h1 className="text-3xl font-bold  mt-2 px-4  ">Join Us!</h1>
            <p className=" text-gray-600 mt-2 px-4">Please provide all current information accurately.</p>
            
          </div>

        </div>

      </div>

    </div>
  );
}
