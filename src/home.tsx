import React from "react";
import Carrossel from "./components/Carrossel";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <h4 className="text-2xl tracking-[.9rem]">CHÁ DE BEBÊ</h4>
      <h1 className="text-7xl font-[Sacramento] text-[#30627E] py-6">
        João Augusto
      </h1>
      <div className="font-semibold text-xl font-[Rokkitt] ">
        <p className="py-4">
          O nosso babydim está chegando e por cá a ansiedade está muito forte.
          Sabemos o quanto ele já é amado e querido, não só pelos papais, como
          por vocês convidados. Selecionamos a dedo a sua presença e será muito
          especial ter você conosco neste dia mágico.
        </p>
        <p className="py-4">
          Abaixo vai ter uma lista de presentes e ela é totalmente on-line,
          prática e fácil, assim você não precisará sair de casa e se preocupar.
          Com apenas um clique, a sua compra online é efetuada e os papais
          receberão uma notificação que foram presenteados por você.
        </p>
        <p className="py-2">
          Vamos dar uma voltinha e conhecer os itens da lista?
        </p>
      </div>
      <div className="text-white font-medium text-[1.2rem] py-8">
        <div className="bg-[#30627E] rounded-full p-4 flex justify-center items-center">
          <img src="./pix.svg" alt="pix icone" className="w-8 mr-2" />
          <p>Pix: 70013633406</p>
        </div>
      </div>
      <Carrossel />
      <Footer />
    </>
  );
}
