/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Head from '../components/Head';
import { asyncUserLogin } from '../redux/authUser/action';
import LoginInput from '../components/LoginInput';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLoginSubmit = () => {
    const { email, password } = values;
    dispatch(asyncUserLogin({
      email, password, navigate, message,
    }));
  };
  const initialState = {
    name: '',
    email: '',
    password: '',
  };
  const {
    handleChange,
    handleSubmit,
    values,
  } = useFormik({
    initialValues: initialState,
    onSubmit: onLoginSubmit,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-4 md:max-w-screen-xl md:mx-auto h-[100vh] md:flex md:justify-between md:items-center">
      <Head title="Login" />
      <LoginInput
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={values}
      />
    </div>
  );
}

export default LoginPage;
