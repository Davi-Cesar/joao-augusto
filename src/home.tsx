import React from "react";
import Carrossel from "./components/Carrossel";
export default function Home() {
  return (
    <>
      <h4 className="text-2xl tracking-[.9rem]">CHÁ DE BEBÊ</h4>
      <h1 className="text-7xl font-[Sacramento] text-[#30627E] py-6">
        João Augusto
      </h1>
      <p className="font-semibold text-xl font-[Rokkitt] py-8">
        O nosso babydim está chegando e por cá a ansiedade está muito forte.
        Sabemos o quanto ele já é amado e querido, não só pelos papais, como por
        vocês convidados. Selecionamos a dedo a sua presença e será muito
        especial ter você conosco neste dia mágico.
      </p>
      <div className="text-white font-medium text-[1.2rem] py-8">
        <div className="bg-[#30627E] rounded-full p-4 flex justify-center items-center">
          <img src="./pix.svg" alt="pix icone" className="w-8 mr-2" />
          <p>Pix: 84994199621</p>
        </div>
      </div>
      <Carrossel />
    </>
  );
}
