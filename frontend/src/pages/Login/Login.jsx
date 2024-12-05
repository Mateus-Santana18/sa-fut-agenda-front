import { useEffect, useId, useState } from 'react';
import { useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import Logo from '../../components/Logo/Logo';
import './Login.css';
import { useAuth } from '../../components/Authentication/useAuth';
import api from '../../config/axios';
import { toast, ToastContainer } from 'react-toastify';
const Login = () => {
  const idEmail = useId();
  const idSenha = useId();
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const navigate = useNavigate();
  const {
    saveToken, 
    isAuthenticated,
    logout
  } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      logout();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loginMutate = useMutation({
    mutationFn: (value) => api.post('/auth/login', value),
    onSuccess: (e) => {
      toast.success('Login realizado com sucesso')
      saveToken(e.data)
    },
    onError: () => toast.error('Falha ao realizar login') 
  })

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="loginCorpo">
        <div className="ladoEsquerdo">
          <div className='txtFacaOLogin'>
            <h1 className='tituloLogin'>Faça o Login</h1>
          </div>
          <div className='inptsLogin'>
            <div className='inptContainerLogin'>
              <label className='labelLogin' htmlFor={idEmail}>E-mail</label>
              <input className='inputLogin' type="email" id={idEmail} onChange={e => setEmail(e.target.value)} placeholder="Digite seu E-mail" />
            </div>
            <div className='inptContainerLogin'>
              <label className='labelLogin' htmlFor={idSenha}>Senha</label>
              <input className='inputLogin' type="password" id={idSenha} onChange={e => setSenha(e.target.value)} placeholder="Digite sua Senha" />
            </div>
          </div>
          <div className='parteDeBaixo'>
            <button className="botaoDeLogin" onClick={() => {
              loginMutate.mutate({
                email,
                senha
              })
            }}>
              LOGIN
            </button>
          </div>

        </div>
        <div className="login-right">
          <Logo
            src="./images/bordaPreta.png"
            largura="300px"
            altura="300px"
          />
          <p className='txtNaoPossuiCadastro'>Não possui Cadastro?</p>
          <button className="register-button" onClick={() => navigate('/register')} >
            Cadastre-se
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;