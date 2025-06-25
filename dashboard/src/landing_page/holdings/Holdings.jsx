import React from 'react'
import { holdings } from '../../data/data.js';

const Holdings = () => {
  return (
    <div className='w-full mx-auto flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-semibold my-5'>Holdings ({holdings.length})</h1>

      <table className='border w-[95%] mx-10'>
        <tr className='border border-gray-300 h-11 text-left'>
          <th>Instrument</th>
          <th>Qty.</th>
          <th>Avg. cost</th>
          <th>LTP</th>
          <th>curr. val</th>
          <th>P&L</th>
          <th>net chg.</th>
          <th>Day chg.</th>
        </tr>

        {holdings.map((stock, index) => {
          const curValue = stock.price * stock.qty;
          const isProfit = curValue - stock.avg * stock.qty >= 0.0;
          const profClass = isProfit ? "text-green-600" : "text-red-600";
          const dayClass = stock.isLoss ? "text-red-600" : "text-green-600";

          return (
            <tr key={index} className="item border border-gray-300 h-7 text-sm">
              <td>{stock.name}</td>
              <td>{stock.name}</td>
              <td>{stock.avg.toFixed(2)}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td>{curValue.toFixed(2)}</td>
              <td className={profClass}>
                {(curValue - stock.avg * stock.qty).toFixed(2)}
              </td>
              <td className={profClass}>{stock.net}</td>
              <td className={dayClass}>{stock.day}</td>
            </tr>
          );
        })}
      </table>
    </div>
  )
}

export default Holdings;
