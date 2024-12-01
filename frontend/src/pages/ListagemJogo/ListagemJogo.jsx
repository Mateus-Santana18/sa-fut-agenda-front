import React from 'react';
import './ListagemJogo.css';
import { FiArrowLeft } from 'react-icons/fi';
import LogoListagemJogador from '../../components/LogoListagemJogador/LogoListagemJogador';

const ListaJogo = () => {




    return (
        <div className="container-masterListagemJogador">
            <div className='topoListagemJogador'>

            </div>
            <div className='meioListagemJogador'>
                <div className='meioEsquerdoListagemJogador'>
                </div>
                <div className='meioCentralListagemJogador'>
                    <div className='topoMeioListagemJogador'>
                        <div className='topoCentralMeioEsquerdoListagemJogador'>
                            <div className="icon-button">
                                <FiArrowLeft className="icon" />
                            </div>
                        </div>
                        <div className='topoCentralMeioLOGOListagemJogador'>
                            <LogoListagemJogador />
                        </div>
                        <div className='topoCentralMeioDireitoListagemJogador'>
                            <button className='botaoAddParticipante'>Adicionar Participante</button>
                        </div>
                    </div>
                    <div className='meioMeioListagemJogador'>

                        <button className='botaoPesquisaParticipante' >Buscar Participante</button>
                        <img className='lupa' src="./images/lupa.png" />
                    </div>
                    <div className='meioBaixoListagemJogador'>
                        <div className='divDadosListagemJogador'>
                            <label className='labeldoJogador1'>Nome</label>
                            <label className='labeldoJogador2'>Função</label>
                            <label className='labeldoJogador3'>Comprovante</label>
                            <label className='labeldoJogador4'>Hierarquia</label>
                            <label className='labeldoJogador5'></label>
                        </div>
                        <div className='DadosListagemJogador'>
                            <div className='lacunas1'>
                                <label >fulano</label>
                            </div>
                            <div className='lacunas2'>
                                <label >goleiro</label>
                            </div>
                            <div className='lacunas3'>
                                <label >comprovante</label>
                            </div>
                            <div className='lacunas4'>
                                <label >Organizador</label>

                            </div>
                            <div className='lacunas5'>
                                <button className='botaoEditarListagemJogador'>
                                    <img className='lapis' src="./images/ferramenta-lapis.png" />
                                </button>
                                <button className='botaoExcluirListagemJogador'>
                                    <img className='lapis' src="./images/lixeira.png" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='meioDireitaListagemJogador'>
                </div>
            </div>
            <div className='baixoListagemJogador'>

            </div>
        </div>
    );

};

export default ListaJogo;
