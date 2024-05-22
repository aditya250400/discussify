/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import Head from '../components/Head';
import RegisterInput from '../components/RegisterInput';
import userRegisterValidation from '../validation/userRegisterValidation';
import { asyncUserRegister } from '../redux/authUser/action';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  const onRegisterSubmit = () => {
    const { name, email, password } = values;
    dispatch(asyncUserRegister({
      name, email, password, navigate, message,
    }));
  };

  const {
    handleChange,
    handleSubmit,
    touched,
    errors,
    values,
  } = useFormik({
    initialValues: initialState,
    onSubmit: onRegisterSubmit,
    validationSchema: userRegisterValidation,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-4 md:max-w-screen-xl md:mx-auto h-[100vh] md:flex md:justify-between md:items-center">
      <Head title="Register" />
      <RegisterInput
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        touched={touched}
        errors={errors}
        values={values}
      />
    </div>
  );
}

export default RegisterPage;
