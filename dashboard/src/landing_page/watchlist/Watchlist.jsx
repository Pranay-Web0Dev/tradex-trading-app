import React, { useState } from "react";
import { watchlist } from "../../data/data";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  ShoppingCart,
  CurrencyRupee,
  BarChartOutlined,
  MoreHoriz,
} from "@mui/icons-material";

const Watchlist = () => {
  return (
    <div className="watchlist-container w-full h-full flex flex-col">
      <div className="search-container flex justify-between items-center px-4 py-2 border-b border-gray-200">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search outline-none text-sm w-full"
        />
        <span className="counts ml-2 text-gray-500 text-sm whitespace-nowrap">
          {watchlist.length} / 50
        </span>
      </div>

      <ul className="list overflow-y-auto px-4 py-2">
        {watchlist.map((stock, index) => (
          <WatchlistItem stock={stock} key={index} />
        ))}
      </ul>
    </div>
  );
};

const WatchlistItem = ({ stock }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border-b py-2 transition-all duration-200"
    >
      <div className="item flex justify-between items-center">
        <p className={stock.isDown ? "text-red-600" : "text-green-600"}>
          {stock.name}
        </p>

        <div className="itemInfo flex gap-2 items-center justify-end w-[140px]">
          {isHovered ? (
            <>
              <ShoppingCart className="text-green-600 cursor-pointer hover:scale-110 transition-transform" />
              <CurrencyRupee className="text-red-600 cursor-pointer hover:scale-110 transition-transform" />
              <BarChartOutlined className="text-gray-500 cursor-pointer hover:text-black" />
              <MoreHoriz className="text-gray-500 cursor-pointer hover:text-black" />
            </>
          ) : (
            <>
              <span className="percent text-gray-500">{stock.percent}</span>
              {stock.isDown ? (
                <KeyboardArrowDown className="text-red-600" />
              ) : (
                <KeyboardArrowUp className="text-green-600" />
              )}
              <span className="price font-medium">{stock.price}</span>
            </>
          )}

          {/* Always visible */}

        </div>
      </div>
    </li>
  );
};

export default Watchlist;
