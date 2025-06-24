import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();

  const getActive = (path) => location.pathname === path;

  return (
    <div>
      <ul className='flex gap-4'>
        <li className={getActive("/") ? "text-red-600" : "text-black"}>
          <Link to="/">Dashboard</Link>
        </li>
        <li className={getActive("/orders") ? "text-red-600" : "text-black"}>
          <Link to="/orders">Orders</Link>
        </li>
        <li className={getActive("/holdings") ? "text-red-600" : "text-black"}>
          <Link to="/holdings">Holdings</Link>
        </li>
        <li className={getActive("/positions") ? "text-red-600" : "text-black"}>
          <Link to="/positions">Positions</Link>
        </li>
        <li className={getActive("/funds") ? "text-red-600" : "text-black"}>
          <Link to="/funds">Funds</Link>
        </li>
        <li className={getActive("/apps") ? "text-red-600" : "text-black"}>
          <Link to="/apps">Apps</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
