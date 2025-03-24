import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { loginStart } from '../../../store/auth/authSlice';

export const useAuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, isLoading } = useSelector((state) => state.userData);

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
  }, [token, navigate]);

  return {
    isLoading,
    onSubmit,
  };
};
