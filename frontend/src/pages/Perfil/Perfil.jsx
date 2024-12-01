import React from 'react';
import './Perfil.css';
import LogoPerfil from '../../components/LogoPerfil/LogoPerfil';

const Perfil = () => {




    return (
        <div className='PerfilContainer'>
            <div className='topoPerfil'>

            </div>
            <div className='meioPerfil'>
                <div className='LadoEsquerdoPerfil'>
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
                        <h1 className='nome'>dia talksksksk</h1>
                    </div>
                </div>
                <div className='LadoDireitoPerfil'>
                    <div className='cimaMeioPerfil'>
                        <div className='tituloPerfil'>
                            <h1 className='EditarPerfil'>Editar Perfil</h1>
                        </div>
                        <div className='infoUsuario'>
                            <h1 className='EditarPerfil2'>Informações de usuário</h1>
                        </div>
                    </div>
                    <div className='dadosPerfilCima'>
                        <div className='inptS'>
                            <label className='nomes'>Nome Completo</label>
                            <input className='inpt' />
                        </div>
                        <div className='inptS'>
                            <label className='nomes'>Senha</label>
                            <input className='inpt'
                                type='password' />
                        </div>
                    </div>
                    <div className='dadosPerfilBaixo'>
                        <div className='inptS'>
                            <label className='nomes'>E-mail</label>
                            <input className='inpt' />
                        </div>
                        <div className='inptS'>
                            <label className='nomes'>Telefone</label>
                            <input className='inpt' />
                        </div>
                    </div>
                    <div className='DivBotaoPerfil'>

                        <div className='botaoPerfil'>
                            <button className="botaoSalvarPerfil">
                                SALVAR
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
