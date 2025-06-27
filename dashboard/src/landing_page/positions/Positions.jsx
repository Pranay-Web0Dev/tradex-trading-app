import React from 'react';
import { positions } from '../../data/data.js';

const Positions = () => {
  return (
    <div className='w-full mx-auto flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-semibold my-5'>Positions ({positions.length})</h1>

      <table className='border w-[95%] mx-10'>
        <thead>
          <tr className='border border-gray-300 h-11 text-left text-sm'>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>curr. val</th>
            <th>P&L</th>
            <th>net chg.</th>
            <th>Day chg.</th>
          </tr>
        </thead>

        <tbody>
          {positions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const investment = stock.avg * stock.qty;
            const profit = curValue - investment;

            const isProfit = profit >= 0;
            const profClass = isProfit ? 'text-green-600' : 'text-red-600';
            const netClass = stock.net.startsWith('-') ? 'text-red-600' : 'text-green-600';
            const dayClass = stock.day.startsWith('-') ? 'text-red-600' : 'text-green-600';

            return (
              <tr key={index} className="item border border-gray-300 h-7 text-sm">
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>{profit.toFixed(2)}</td>
                <td className={netClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Positions;
