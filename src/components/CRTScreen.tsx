import React from "react";

const CRTScreen = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="crt-screen bg-[#111612] border-x-8 border-y-4 border-[#1a1f1a]">
      <div className="scanlines-overlay grid grid-cols-1 md:grid-cols-12 gap-6 p-6 md:p-10">
        {children}
      </div>
    </div>
  );
};

export default CRTScreen;
