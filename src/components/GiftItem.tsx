import { Link } from "react-router-dom";
import { Gift } from "../types/Gift";
interface GiftItemProps {
  gift: Gift;
  onChoose: (gift: Gift) => void;
}

const GiftItem = ({ gift, onChoose }: GiftItemProps) => {
  return (
    <div
      className="flex flex-col border relative justify-between bg-center rounded-3xl shadow-lg h-[25rem] w-full text-center text-white bg-cover"
      style={{ backgroundImage: `url(${gift.image})` }}
    >
      {/* <div className="absolute inset-0 bg-black opacity-10 rounded-3xl"></div> */}
      <div className="flex relative text-left font-medium justify-between rounded-t-3xl bg-[#617C8B] bg-opacity-80 p-4 items-center">
        <h3 className="relative z-10 text-lg">{gift.name}</h3>
        <p className="relative z-10 text-lg font-semibold tracking-wider">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(gift.price)}
        </p>
      </div>
      <button
        onClick={() => onChoose(gift)}
        className="text-white text-lg py-8 px-4 md:px-0 "
      >
        <div className="flex justify-center items-center backdrop-blur-[15px] mx-12 py-4 px-4 rounded-full border border-slate-100 border-opacity-25">
          <img
            src=" /bear-icon.svg"
            alt="urso de bebÊ"
            className="mr-2 w-6"
          ></img>
          <Link to={`/confirmacao/${gift.id}`} className="btn">
            <p>Presentear</p>
          </Link>
        </div>
      </button>
    </div>
  );
};

export default GiftItem;
