import * as Yup from 'yup';

const userLoginValidation = Yup.object({
  email: Yup.string().email('Email harus valid').required('Email harus di isi'),
  password: Yup.string().min(6, 'Password minimal 6 karakter').required('Password harus di isi'),
});

export default userLoginValidation;
