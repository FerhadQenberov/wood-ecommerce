import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const basicSchema = yup.object().shape({
  email: yup.string().email('Duzgun email yazin').required('Email girmek mecburidir'),
  password: yup.string()
    .min(5, 'Min 5 rəqəm yazın')
    .max(9, 'Max 9 reqem yazin') // Corrected the max validation
    .matches(passwordRules, 'Bir boyuk herf ve bir balaca herf yazin')
    .required('Password girmek mecburidir'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Password uygun gelmir').required('Tekrak password zorunludur'),
});

const formSchema = yup.object().shape({
  email:yup.string().email('Duzgun email yazin').required('Email girmek mecburidir'),
  password:yup.string()
    .min(5, 'Min 5 rəqəm yazın')
    .required('Password girmek mecburidir'),
});

export { basicSchema, formSchema };
