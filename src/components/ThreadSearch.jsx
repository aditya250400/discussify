import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../assets/icon/searchIcon.svg';

function ThreadSearch({ searchInput, onSearchInputChange }) {
  return (
    <div className="flex ">
      <input type="text" onChange={onSearchInputChange} value={searchInput} name="searchThread" id="searchThread" className="w-full p-2 rounded-s-xl placeholder:pl-3 focus:outline-none" placeholder="Search the Threads" autoComplete="off" />

      {/* eslint-disable react/button-has-type  */}
      <button className="bg-bluePrimary rounded-e-xl p-2 w-[60px] flex justify-center items-center">
        <img src={searchIcon} alt="searchIcon" />
      </button>
    </div>
  );
}

ThreadSearch.propType = {
  onSearchInputChange: PropTypes.instanceOf(Function),
  searchInput: PropTypes.string,
};

export default ThreadSearch;
