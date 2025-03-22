// useAuthForm.js
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { loginStart } from '../../../store/auth/authSlice';

export const useAuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, error, isLoading } = useSelector((state) => state.userData);

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const dataUser = {
      email: data.email,
      password: data.password,
    };

    try {
      dispatch(loginStart(dataUser));
    } catch (err) {
      console.error('Erro no login:', err);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }

    if (error) {
      setError('email', { type: 'manual', message: 'Email ou senha incorretos' });
      setError('password', { type: 'manual', message: 'Email ou senha incorretos' });
    }
  }, [token, error, navigate, setError]);

  return {
    handleSubmit,
    control,
    errors,
    isLoading,
    onSubmit,
  };
};
