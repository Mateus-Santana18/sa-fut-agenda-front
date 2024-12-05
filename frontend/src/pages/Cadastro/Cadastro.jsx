import './Cadastro.css';
import Logo from '../../components/Logo/Logo';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import api from '../../config/axios';
import { toast, ToastContainer } from 'react-toastify';

const Cadastro = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  return (
    <div className="cadastro-container">
      <div className="cadastroCorpo">
        <ToastContainer />
        <div className="ladoEsquerdoCadastro">
          <div className="divLogoCadastro">
            {/* <Logo classe={"logoCadastro"}/> */}
            <Logo
              src="./images/bordaPreta.png"
              largura="300px"
              altura="300px"
            />
          </div>
          <p style={{fontSize: "25px"}}>Possui uma conta?</p>
          <button className="botaoLoginCadastro" onClick={() => navigate('/login', {
            replace: true
          })}>
            Fazer Login
          </button>
        </div>
        <div className="ladoDireitoCadastro">
          <div className='tituloCadastroAlinhar'>
            
          <h1 className='tituloCadastro'>Faça seu cadastro</h1>
          </div>
          <label className='labelCadastro' htmlFor="email">Nome Completo</label>
          <input className='inputCadastro' type="text" placeholder="Digite seu Nome" value={nome} onChange={e => setNome(e.target.value)} />
          <label className='labelCadastro' htmlFor="email">E-mail</label>
          <input className='inputCadastro' type='email' placeholder="Digite seu E-mail" value={email} onChange={e => setEmail(e.target.value)} />
          <label className='labelCadastro' htmlFor="telefone">Telefone</label>
          <input className='inputCadastro' type='telefone' placeholder="Digite seu Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
          <label className='labelCadastro' htmlFor="password">Senha</label>
          <input className='inputCadastro' type="password" placeholder="Digite sua Senha" value={password} onChange={e => setPassword(e.target.value)} />
          <label className='labelCadastro' htmlFor="password">Confirme sua senha</label>
          <input className='inputCadastro' type="password" placeholder="Insira sua Senha Novamento" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          <div className='parteDeBaixoCadastro'>
            <button className="botaoDeCadastrar" onClick={() => {
              if (password !== confirmPassword) {
                toast('Senhas devem ser iguais')
                return
              }
              api.post('/auth/signup', {
                email,
                nome,
                senha: password,
                telefone,
                cargo: 'USER'
              }).then(
                () => {
                  navigate('/login')
                }
              ).catch(() => {
                toast('Falha para cadastrar usuário')
              })
            }}>
              CADASTRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
