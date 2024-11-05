import React, { useState } from "react";
import GiftItem from "./GiftItem";

const initialGifts = [
  {
    id: 1,
    name: "Fraldas Pampers",
    price: "R$50,00",
    image: "/images/chupeta.jpg",
  },
  {
    id: 2,
    name: "Toalhas Umedecidas",
    price: "R$20,00",
    image: "https://picsum.photos/200/300?random=1",
  },
  {
    id: 3,
    name: "Mamadeira",
    price: "R$30,00",
    image: "https://picsum.photos/200/300?random=19",
  },
  {
    id: 4,
    name: "Mamadeira",
    price: "R$30,00",
    image: "https://picsum.photos/200/300?random=19",
  },
  {
    id: 5,
    name: "Mamadeira",
    price: "R$30,00",
    image: "https://picsum.photos/200/300?random=19",
  },
];

const GiftList = () => {
  const [gifts] = useState(initialGifts);

  const handleChooseGift = (gift: { name: string }) => {
    alert(`Você escolheu o presente: ${gift.name}`);
    // Aqui você pode implementar lógica para remover o presente da lista, se necessário
  };

  return (
    <div className="max-w-4xl font-[Rokkitt] mx-auto py-4">
      {/* <section className="flex justify-between mb-6 text-center items-center">
        <h1 className="text-3xl font-bold text-left text-[#30627E]">
          Lista de presentes{" "}
        </h1>
        <img src="/arrow.svg" alt="arrow" />
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gifts.map((gift) => (
          <GiftItem key={gift.id} gift={gift} onChoose={handleChooseGift} />
        ))}
      </div> */}
    </div>
  );
};

export default GiftList;
