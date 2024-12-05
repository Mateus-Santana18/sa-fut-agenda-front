import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { useAuth } from '../../components/Authentication/useAuth';
import api from '../../config/axios';
import './Perfil.css';

const Perfil = () => {
    const navigate = useNavigate();
    const {
        user,
        saveToken
    } = useAuth();
    const [nome, setNome] = useState(user.nome);
    const [email, setEmail] = useState(user.email);
    const [telefone, setTelefone] = useState(user.telefone);
    const [password, setPassword] = useState();
    // useEffect(() => {
    //     setNome(user.nome)
    //     setEmail(user.email)
    //     setTelefone(user.telefone)
    // }, [user]);
    return (
        <div className='PerfilContainer'>
            <ToastContainer />
            <div className='topoPerfil'>

            </div>
            <div className='meioPerfil'>
                {/* <div className='LadoEsquerdoPerfil'>
                    <div className='NomeUsuarioPerfil'>
                        <h1 className='nome'>#fulano</h1>
                    </div>
                    <div className='IdUsuarioPerfil'>
                        <h1 className='nome'>#id</h1>
                    </div>
                    <div className='DivLogoPerfil'>
                        <LogoPerfil />
                    </div>
                    <div className='DataPerfil'>
                        <h1 className='nome text-white'>dia talksksksk</h1>
                    </div>
                </div> */}
                <div className='LadoDireitoPerfil'>
                    <div className='cimaMeioPerfil'>
                        <div className='tituloPerfil'>
                            <h1 className='EditarPerfil text-white'>Editar Perfil</h1>
                        </div>
                        <div className='infoUsuario'>
                            <h1 className='EditarPerfil2 text-white'>Informações de usuário</h1>
                        </div>
                    </div>
                    <div className='dadosPerfilCima'>
                        <div className='inptS'>
                            <label className='nomes text-white'>Nome Completo</label>
                            <input className='inpt' value={nome} onChange={e => setNome(e.target.value)} />
                        </div>
                        <div className='inptS'>
                            <label className='nomes text-white'>Senha</label>
                            <input className='inpt'
                                type='password' value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className='dadosPerfilBaixo'>
                        <div className='inptS'>
                            <label className='nomes text-white'>E-mail</label>
                            <input className='inpt' value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className='inptS'>
                            <label className='nomes text-white'>Telefone</label>
                            <input className='inpt' value={telefone} onChange={e => setTelefone(e.target.value)} />
                        </div>
                    </div>
                    <div className='DivBotaoPerfil'>
                        <div className='flex gap-12'>
                            <button className="botaoSalvarPerfil" onClick={() => {
                                api.put('/auth', {
                                    email,
                                    nome,
                                    senha: password,
                                    telefone,
                                    cargo: 'USER'
                                }).then((r) => {
                                    saveToken(r.data)
                                }).catch(() => {
                                    toast('Falha ao atualizar os dados')
                                })
                            }}>
                                SALVAR
                            </button>
                            <button className="botaoDeletarPerfil" onClick={() => {
                                api.delete('/auth')
                                .then(() => {
                                    navigate('/login')
                                })
                                .catch(() => {
                                    toast('Falha ao deletar a conta')
                                })
                            }}>
                                DELETAR CONTA
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='baixo'>

            </div>
        </div>
    );
};

export default Perfil;
