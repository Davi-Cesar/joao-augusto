import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import giftsData from "../data/gifts.json";
import { Gift } from "../types/Gift";

const ConfirmacaoGift: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [gift, setGift] = useState<Gift | null>(null);
  const [valueFlap, setValueFlap] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const foundGift = giftsData.find((g) => g.id === parseInt(id || "", 10));
    setGift(foundGift || null);
  }, [id]);

  if (!gift) return <p>Carregando...</p>;

  const handleConfirmChoice = () => {
    if (!paymentMethod) {
      setErrorMessage("Por favor, escolha como deseja presentear.");
      return;
    }
    const totalPrice = gift.price + valueFlap;
    const additionalItem = valueFlap !== 0 ? " com um pacote de fraldas" : "";
    const addMethodPayment =
      paymentMethod !== "pix"
        ? `  💳 Forma ${paymentMethod}.`
        : `  💵 Forma ${paymentMethod}.`;
    const message = `Olá, quero presentear com o item ${gift.name} no valor de R$ ${totalPrice}${additionalItem} ${addMethodPayment}`;
    const whatsappNumber = "558492223000";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappLink;
  };

  return (
    <div className="container flex flex-col mt-4 justify-center items-center text-center">
      <button className="text-left w-full">
        <Link to={"/"}>
          <img
            src="/arrow.svg"
            className="transform w-6 rotate-180"
            alt="voltar"
          />
        </Link>
      </button>
      <h1 className="text-2xl font-bold p-4 text-[#30627E]">
        Confirmação do Presente
      </h1>
      <div className="w-full flex justify-center">
        <img src={gift.image} alt={gift.name} className="rounded-3xl w-96" />
      </div>
      <div className="flex justify-evenly p-2 w-full">
        <h2>{gift.name}</h2>
        <p className="font-semibold">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(gift.price + valueFlap)}
        </p>
      </div>
      <form className="max-w-sm mx-auto m-2">
        <select
          id="pays"
          defaultValue=""
          className="bg-gray-50 border disabled:text-red-300 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#30627E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            setPaymentMethod(e.target.value);
            setErrorMessage("");
          }}
        >
          <option value="" disabled>
            Escolha como deseja presentear
          </option>
          <option value="pix">
            <p>Pix</p>
          </option>
          <option value="card">Cartão</option>
        </select>
        {paymentMethod === "pix" && (
          <div className="p-4 bg-slate-200 m-2 text-[#707A87] rounded-md">
            <p className="font-semibold">Número do Pix:</p>
            <p>70013633406</p>
          </div>
        )}
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        <label className="flex flex-row justify-center items-center mb-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={(e) => setValueFlap(e.target.checked ? 30 : 0)}
          />
          <span className="mr-0 p-2 text-sm font-medium text-left text-[#707A87] dark:text-gray-500">
            Adicionar pacote de fralda (+R$ 30,00)
          </span>
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-200 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-300 peer-checked:bg-blue-600"></div>
        </label>
      </form>
      <button
        onClick={handleConfirmChoice}
        className="bg-[#30627E] text-white font-medium py-2 px-6 rounded-lg mt-2 hover:bg-[#244f66] transition duration-200"
      >
        Confirmar Escolha
      </button>
    </div>
  );
};

export default ConfirmacaoGift;
