import * as Yup from 'yup';

const userRegisterValidation = Yup.object({
  name: Yup.string()
    .min(3, 'Nama minimal  3 karakter')
    .required('Nama harus di isi'),
  email: Yup.string().email('Email harus valid').required('Email harus di isi'),
  password: Yup.string().min(6, 'Password minimal 6 karakter').required('Password harus di isi'),
});

export default userRegisterValidation;
