import PropTypes from "prop-types";
import { useState } from "react";
import style from "./StockpileInfo.module.css";

interface Props {
  stockpileName: string;
  typeName: string;
  enterpriseName: string;
}

export default function StockpilesInfo(prop: Props) {
  const { stockpileName, typeName, enterpriseName } = prop;

  const [display, setDisplay] = useState(false);
  const [Animation, setAnimation] = useState("");

  function handleChangeInfoVIs() {
    if (!display) {
      setDisplay(true);
      setAnimation("openAnimation");
    } else {
      setDisplay(false);
      setAnimation("closeAnimation");
    }
  }

  return (
    <article
      onClick={handleChangeInfoVIs}
      className={`${style[Animation]} flex flex-col  h-14 hover:scale-105 hover:border-gray-400 hover:text-slate-300 cursor-pointer rounded-sm transition-all   ml-4 mr-4 justify-center items-center border-b-2 poppins text-xl text-slate-400  border-gray-600`}
    >
      <h4 className="mt-2 mb-2">{stockpileName}</h4>
      <section
        className={`${
          display ? "flex" : "hidden"
        } flex-col justify-center items-center`}
      >
        <div className="flex">
          <h5 className="mr-2 text-slate-300">Type:</h5>
          <span>{typeName}</span>
        </div>
        <div className="flex">
          <h5 className="mr-2 text-slate-300">Enterprise:</h5>
          <span>{enterpriseName}</span>
        </div>
        <button className="hover:scale-105 shadow-lg mt-5 mb-5 w-1/3 rounded-lg font-semibold primaryColor text-black">
          Use
        </button>
      </section>
    </article>
  );
}

StockpilesInfo.propTypes = {
  stockpileName: PropTypes.string,
  typeName: PropTypes.string,
  enterpriseName: PropTypes.string,
};
