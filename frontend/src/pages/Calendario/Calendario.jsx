import React from 'react';
import './Calendario.css';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import LogoCalendario from '../../components/LogoCalendario/LogoCalendario';
const Calendario = () => {




    return (
        <div className="container-master">
            <div className='topoCalendario'>
                <div className='esquerdaTopoCalendario'>
                </div>
                <div className='direitaTopoCalendario'>
                </div>
                <div className='cantinhoDoPerfil'>
                    <img className='iconPerfil' src="./imagens/usuario-de-perfil.png" />
                </div>
            </div>
            <div className='meioCalendarioPrincipal'>
                <div className='meioEsquerdoCalendario'>
                    <LogoCalendario />
                </div>
                <div className='meioCentralCalendario'>
                    <div className='meioTopoCalendario'>

                        <FiArrowLeft className="seta" />
                        <label className='calendario'>Janeiro 2025</label>
                        <FiArrowRight className="seta" />
                    </div>
                    <div className='meioCalendario'>
                        <div className='parte1'>
                            <div className='dias'>
                                <label className='labelDias'>1</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>2</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>3</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>4</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>5</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>6</label>
                            </div>

                        </div>
                        <div className='parte2'>
                            <div className='dias'>
                                <label className='labelDias'>7</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>8</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>9</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>10</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>11</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>12</label>
                            </div>

                        </div>
                        <div className='parte3'>
                            <div className='dias'>
                                <label className='labelDias'>13</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>14</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>15</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>16</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>17</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>18</label>
                            </div>

                        </div>
                        <div className='parte4'>
                            <div className='dias'>
                                <label className='labelDias'>19</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>20</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>21</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>22</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>23</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>24</label>
                            </div>

                        </div>
                        <div className='parte5'>
                            <div className='dias'>
                                <label className='labelDias'>25</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>26</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>27</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>28</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>29</label>
                            </div>
                            <div className='dias'>
                                <label className='labelDias'>30</label>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='meioDireitaCalendario'>
                </div>
            </div>
            <div className='baixoCalendario'>

            </div>
        </div>
    );

};

export default Calendario;
