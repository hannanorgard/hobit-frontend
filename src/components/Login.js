import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

const Login = () => {
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.acessToken);

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  return (
    <div>
      <Form />
    </div>
  )
}

export default Login;