import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import logo from '../assets/icon/discussifyLogo.svg';
import leaderboardsIcon from '../assets/icon/leaderboards.svg';
import logoutIcon from '../assets/icon/logoutIcon.svg';
import threadsIcon from '../assets/icon/threads.svg';
import { asyncUserLogout } from '../redux/authUser/action';

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showLogoutNav, setShowLogoutNav] = useState(true);
  const { user } = useSelector((state) => state.authUser);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(asyncUserLogout({ message, navigate }));
  };

  return (

    <header className="bg-white shadow-lg sticky top-0 z-[10]">
      <div className="h-[90px] flex justify-between items-center relative">
        <Link to="/" className="flex items-center gap-2 cursor-pointer ml-5 lg:ml-[53px]" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="logo" />
          <h3 className="text-base ml-[5px]">Discussify</h3>
        </Link>
        <div>
          <div className="flex items-center px-4 lg:mr-[53px]">
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              type="button"
              className={`${showNav ? 'hamburger-active' : ''} block absolute right-4 lg:hidden cursor-pointer`}
              id="hamburger"
              onClick={() => setShowNav(!showNav)}
            >
              <span
                className="w-[30px] h-[2px] my-2 block bg-dark  transition duration-300 ease-in-out origin-top-left"
              />
              <span
                className="w-[30px] h-[2px] my-2 block bg-dark  transition duration-300 ease-in-out origin-top-left"
              />
              <span
                className="w-[30px] h-[2px] my-2 block bg-dark  transition duration-300 ease-in-out origin-top-left"
              />
            </button>
            <nav id="nav-menu" className={`${showNav ? '' : 'hidden'} absolute py-5 bg-white shadow-xl rounded-lg max-w-[250px] w-full right-4 top-full mt-[1px] lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}>
              <ul className="flex flex-col gap-5 pl-5 lg:flex-row lg:items-center lg:justify-center lg:gap-8">
                <li className="group">
                  <Link to="/" className="group-hover:text-bluePrimary flex gap-2 items-center" onClick={() => setShowNav(!showNav)}>
                    <img src={threadsIcon} alt="threads icon" className=" cursor-pointer" />
                    Threads
                  </Link>
                  {
                    location.pathname === '/' ? (
                      <hr className="bg-bluePrimary h-[4px] w-[130px] rounded-full mt-[5px]" />
                    ) : null
                  }
                </li>
                <li className="group">
                  <Link to="/threads/leaderboards" className="mt-2 group-hover:text-bluePrimary flex gap-1 items-center lg:mt-0 " onClick={() => setShowNav(!showNav)}>
                    <img src={leaderboardsIcon} alt="leaderboards icon" className="cursor-pointer" />
                    Leaderboards
                  </Link>
                  {
                    location.pathname === '/threads/leaderboards' ? (
                      <hr className="bg-bluePrimary h-[4px] w-[175px] rounded-full mt-[5px]" />
                    ) : null
                  }

                </li>
                <li className="group relative">
                  <div className="flex gap-4 items-center cursor-pointer overflow-hidden" onMouseLeave={() => setShowLogoutNav(true)} onMouseEnter={() => setShowLogoutNav(false)}>
                    {
                    user === null ? (
                      <>
                        <div className="animate-pulse bg-slate-300 rounded-full w-[40px] h-[40px]" />
                        <div className="animate-pulse bg-slate-300 h-4 w-20 rounded-lg" />
                      </>
                    ) : (
                      <>
                        <img src={user.avatar} alt={user.avatar} className="rounded-full w-[40px] h-[40px]" />
                        <h3 className="text-sm group-hover:text-bluePrimary">{user.name}</h3>
                      </>
                    )
                   }
                    <button type="button" onClick={onLogout} className={`${showLogoutNav ? '' : 'lg:flex'} bg-white rounded-xl shadow-xl p-2 border hidden lg:gap-2 lg:items-center absolute right-10 top-8 hover:text-bluePrimary w-[120px]`}>
                      <img src={logoutIcon} alt="logout icon" />

                      <h3 className="text-sm ">Logout</h3>

                    </button>
                  </div>
                </li>
                <li className="group ">
                  <button
                    type="button"
                    className="flex gap-2 items-center lg:hidden group-hover:text-bluePrimary"
                    onClick={() => {
                      setShowNav(!showNav);
                      onLogout();
                    }}
                  >
                    <img src={logoutIcon} alt="logout icon" />
                    <h3 className="text-sm">Logout</h3>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
