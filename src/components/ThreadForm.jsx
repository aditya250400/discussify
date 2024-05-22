/* eslint-disable no-use-before-define */
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncGetAllThreads, asyncMakeThread } from '../redux/threads/action';

function ThreadForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    title: '',
    body: '',
    tag: '',
  };
  const [maxTitleLength, setMaxTitleLength] = useState(50);
  const [maxTagsLength, setMaxTagsLength] = useState(20);

  const onSubmit = () => {
    const { title, body, tag } = values;
    dispatch(asyncMakeThread({
      title, body, tag, navigate, message,
    }));
    dispatch(asyncGetAllThreads());
  };

  const {
    handleSubmit,
    values,
    setValues,
  } = useFormik({
    initialValues: initialState,
    onSubmit,
  });

  const onThreadTitleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 50) {
      setValues({ ...values, title: inputValue });
      setMaxTitleLength(50 - inputValue.length);
    } else {
      setValues({ ...values, title: inputValue.slice(0, 50) });
    }
  };
  const onThreadTagChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 20) {
      setValues({ ...values, tag: inputValue });
      setMaxTagsLength(20 - inputValue.length);
    } else {
      setValues({ ...values, tag: inputValue.slice(0, 20) });
    }
  };
  const onThreadBodyChange = (e) => {
    setValues({ ...values, body: e.target.value });
  };

  return (
    <form className="md:w-[755px] md:mx-auto" onSubmit={handleSubmit}>
      {/* Title and Body Thread Start */}
      <div className="bg-white rounded-xl h-auto">
        <h1 className="font-bold text-[22px] text-center pt-[20px] pb-[10px]">Create a Thread</h1>
        <div className="h-[1px] bg-[#C7C7C7] w-full" />
        <div className="px-[22px]">
          <div className=" mt-[23px] flex justify-between ">
            <input type="text" className="w-full text-[20px] md:text[22px] mr-5 focus:outline-none placeholder:text-[#596880]  placeholder:text-[20px] placeholder:md:text-[22px] " placeholder="Insert your title here..." onChange={onThreadTitleChange} value={values.title} />
            <div className=" text-[#596880]">{maxTitleLength}</div>
          </div>
          <textarea className="w-full h-[150px] mt-[50px] focus:outline-none resize-none placeholder:text-[#596880] placeholder:text-[18px] text-[18px]" onChange={onThreadBodyChange} placeholder="Start typing what's on your mind..." value={values.body} />
        </div>
      </div>
      {/* Title and Body Thread end */}

      {/* Thread's tag Section start */}
      <div className="bg-white my-[20px] rounded-xl flex items-center gap-[2px] overflow-hidden">
        <p className="pl-[22px] text-[18px] text-[#596880]">#</p>
        <div className="flex justify-between items-center w-full">
          <input type="text" className="w-full py-[5px] text-[18px] focus:outline-none placeholder:text-[#596880]  placeholder:text-[18px]  " placeholder="Insert your tags here..." onChange={onThreadTagChange} value={values.tag} />
          <p className="pr-[22px] text-[18px] text-[#596880]">{maxTagsLength}</p>
        </div>
      </div>
      {/* Thread's tag Section End */}

      {/* Thread's Button submit start */}
      <button className="bg-bluePrimary p-2 w-full text-white flex justify-center items-center gap-2 rounded-xl " type="submit">
        <h1 className="text-[20px]">Send</h1>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.90616 4.23001L18.8228 8.51001C22.8228 10.43 22.8228 13.57 18.8228 15.49L9.90616 19.77C3.90616 22.65 1.45824 20.29 4.45824 14.54L5.36449 12.81C5.59366 12.37 5.59366 11.64 5.36449 11.2L4.45824 9.46001C1.45824 3.71001 3.91658 1.35001 9.90616 4.23001Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.66675 12H11.2917" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      </button>
      {/* Thread's Button submit End */}
    </form>
  );
}

export default ThreadForm;
