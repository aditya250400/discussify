/* eslint-disable no-mixed-operators */
/* eslint-disable no-use-before-define */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LoginInput({
  handleSubmit, handleChange, values,
}) {
  return (
    <div className="bg-white rounded-xl md:w-[500px] md:mx-auto">
      <h1 className="text-center font-bold text-[20px] pt-[31px] pb-[10px]">Login To Your Account</h1>
      <form className="flex flex-col gap-3 justify-center items-center pb-[35px] mx-5 md:mx-[50px]">
        {/* Input email */}
        <div className="w-full flex items-center overflow-hidden border-2 border-[#374151] rounded-xl">
          <label className="block px-2 cursor-pointer" htmlFor="email">
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.385 17.9375H6.335C3.62 17.9375 1.81 16.625 1.81 13.5625V7.4375C1.81 4.375 3.62 3.0625 6.335 3.0625H15.385C18.1 3.0625 19.91 4.375 19.91 7.4375V13.5625C19.91 16.625 18.1 17.9375 15.385 17.9375Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.385 7.875L12.5524 10.0625C11.6202 10.78 10.0908 10.78 9.15862 10.0625L6.33502 7.875" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

          </label>
          <input type="email" className="w-full border-l-2 border-[#374151]  p-2 focus:outline-none " placeholder="Insert your email" id="email" autoComplete="off" name="email" value={values.email} onChange={handleChange} />
        </div>
        {/* Input end */}

        {/* Input password */}
        <div className="w-full flex items-center overflow-hidden border-2 border-[#374151] rounded-xl">
          <label className="block px-2 cursor-pointer" htmlFor="password">
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.91 13.0637C16.0457 14.8575 13.3759 15.4087 11.032 14.7L6.76942 18.8125C6.46172 19.1187 5.85537 19.3025 5.42097 19.2412L3.44807 18.9787C2.79647 18.8912 2.19012 18.2962 2.09057 17.6662L1.81907 15.7587C1.75572 15.3387 1.96387 14.7525 2.26252 14.455L6.51602 10.3425C5.79202 8.0675 6.35312 5.48625 8.21742 3.6925C10.8872 1.11125 15.2221 1.11125 17.9009 3.6925C20.5797 6.27375 20.5797 10.4825 17.91 13.0637Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.23547 15.3037L8.31697 17.3162" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.1225 9.625C13.8722 9.625 14.48 9.03737 14.48 8.3125C14.48 7.58763 13.8722 7 13.1225 7C12.3728 7 11.765 7.58763 11.765 8.3125C11.765 9.03737 12.3728 9.625 13.1225 9.625Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </label>
          <input type="password" className="w-full border-l-2 border-[#374151]  p-2 focus:outline-none " placeholder="Insert your password" id="password" name="password" value={values.password} onChange={handleChange} />
        </div>
        {/* Input password end */}

        {/* Submit button */}
        <div className="w-full">
          <button onClick={() => handleSubmit(values)} className="bg-[#312ECB] text-white text-center p-2 rounded-xl w-full" type="button">Login</button>
        </div>
        {/* Submit button end */}

        {/* Have an accoubt */}
        <div className="flex gap-1 items-center  mt-[13px]">
          <h3 className="text-[15px]">Don't Have an Account?</h3>
          <Link to="/register" className="text-[12px] text-bluePrimary">Register</Link>
        </div>
      </form>
    </div>
  );
}

LoginInput.propType = {
  handleSubmit: PropTypes.instanceOf(Function),
  handleChange: PropTypes.instanceOf(Function),
  values: PropTypes.instanceOf(Object),
};

export default LoginInput;
