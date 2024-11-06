import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true); // Inicia a animação de saída após 2 segundos
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-slate-100 z-50 transition-all duration-1000 ${
        isExiting ? "transform -translate-y-full opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="text-6xl font-[Sacramento] text-[#30627E] py-6 animate-blur-reduce ">
        João Augusto
      </h1>
    </div>
  );
};

export default Preloader;
