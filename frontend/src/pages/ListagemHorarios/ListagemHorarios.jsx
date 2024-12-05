import './ListagemHorarios.css';
import LogoListagemHorarios from '../../components/LogoListagemHorarios/LogoListagemHorarios';
import { useNavigate, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { parse, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import api from '../../config/axios';
import { toast, ToastContainer } from 'react-toastify';
import { FiArrowLeft } from 'react-icons/fi';
const ListagemHorarios = () => {
    const {
        date: dateParam
    } = useParams();
    const { data: response } = useQuery({
        queryKey: [dateParam],
        queryFn: () => api.get('/quadra/date/' + dateParam),
        initialData: {
            data: []
        }
    });
    // const {
    //     user
    // } = useAuth();
    const navigate = useNavigate();
    return (
        <div className="container-masterListagemHorarios">
            <ToastContainer />
            <div className='topoListagemHorarios'>
                <div className="bg-[#00FF00] w-10 ml-2 mt-2 rounded-[50%] flex justify-center items-center h-10 cursor-pointer" onClick={() => navigate(-1)}>
                    <FiArrowLeft className="icon" />
                </div>
                <div className='topoSetaListagemHorarios'>
                    <img className='setaListagemHorarios' src="../../images/seta-esquerda.png" />
                </div>
                <div className='topoTituloListagemHorarios'>
                    <label className='topoLabelListagemHorarios'>FUT AGENDA</label>
                </div>
                <div className='topoLogoListagemHorarios'>
                    <LogoListagemHorarios />
                </div>
            </div>
            <div className='meioListagemHorarios'>
                <div className='w-full flex gap justify-evenly p-24'>
                    {response.data.map(e => {
                        const formatString = 'yyyy-MM-dd:HH';
                        const date = parse(dateParam, formatString, new Date());
                        const calendarDay = format(date, "dd 'de' MMMM", { locale: ptBR });
                        const hour = format(date, 'HH:00');
                        return (<div className='bg-black text-white border-green-600 border-2 border-solid min-w-[344px]' key={e.id}>
                            <div className='flex flex-col pl-6 pt-3 gap-4'>
                            <div className='flex'>
                                    <div className='espaco1'><img className='icon' src="../../images/calendario.png" /></div>
                                    <div className='espaco2'><label className=''>{calendarDay}</label></div>
                                </div>
                                <div className='flex'>
                                    <div className='espaco1'><img className='icon' src="../../images/relogio.png" /></div>
                                    <div className='espaco2'><label className=''>{hour}</label></div>
                                </div>
                                <div className='flex'>
                                    <div className='espaco1'><img className='icon' src="../../images/gps.png" /></div>
                                    <div className='espaco2'><label className=''>{e.endereco} ({e.nome})</label></div>
                                </div>
                            </div>
                            <div className='DivbotaoListagemHorarios pt-4'>
                                {
                                    typeof e.reservaId === 'number' && (<button className='w-[125px] h-12 bg-green-500 rounded border-white border-2' onClick={() => {
                                        navigate('/game-list/' + e.reservaId)
                                    }}>VISUALIZAR</button>)
                                }
                                {
                                    typeof e.reservaId !== 'number' && (<button className='w-[125px] h-12 bg-green-500 rounded border-white border-2' onClick={() => {
                                        api.post('/reserva/save', {
                                            quadraId: e.id,
                                            horario: dateParam,
                                            funcao: 'LINHA'
                                        })
                                        .then(
                                            e => {
                                                toast('Reserva criada com sucesso')
                                                navigate('/game-list/' + e.data.id)
                                            }
                                        )
                                        .catch(() => {
                                            toast('Falha ao fazer reserva')
                                        })
                                    }}>ALUGAR</button>)
                                }
                            </div>
                        </div>) 
                    })}
                </div>
            </div>
            <div className='baixoListagemHorarios'>
            </div>
        </div>
    );

};

export default ListagemHorarios;
