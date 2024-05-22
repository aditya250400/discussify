import React from 'react';
import { Link } from 'react-router-dom';
import pencilIcon from '../assets/icon/pencilIcon.svg';

function CreateThreadButton() {
  return (
    <>
      <Link to="/threads/create" className="hidden bg-bluePrimary text-white p-2 rounded-xl md:flex md:justify-center md:gap-2 cursor-pointer hover:bg-blue-600 mb-5">
        <img src={pencilIcon} alt="Pencil Icon" />
        <h5>Create a New Thread</h5>
      </Link>
      <Link to="/threads/create" className="flex justify-center fixed right-3 bottom-20 bg-bluePrimary text-white p-3 rounded-xl cursor-pointer hover:bg-blue-600 md:hidden">
        <img src={pencilIcon} alt="Pencil Icon" className="w-7" />
      </Link>
    </>
  );
}

export default CreateThreadButton;
