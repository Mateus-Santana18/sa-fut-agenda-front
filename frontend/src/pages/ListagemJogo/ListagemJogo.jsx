import './ListagemJogo.css';
import { FiArrowLeft } from 'react-icons/fi';
import LogoListagemJogador from '../../components/LogoListagemJogador/LogoListagemJogador';
import { useNavigate, useParams } from 'react-router';
import lupaPng from "/images/lupa.png";
import { Button, Input, Select, Table } from 'antd';
import api from '../../config/axios';
import Modal from 'react-modal';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../components/Authentication/useAuth';
import { CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const ListaJogo = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    
    const columns = [
        {
            title: 'Nome',
            key: 'name',
            align: 'center',
            render: (value) => <a>{value.usuario.nome}</a>,
          },
          {
            title: 'E-mail',
            key: 'email',
            align: 'center',
            render: (value) => <a>{value.usuario.email}</a>,
          },
          {
            title: 'Função',
            dataIndex: 'funcao',
            key: 'funcao',
            align: 'center',
            render: (text) => <a>{text}</a>,
          },
        //   {
        //     title: 'Comprovante',
        //     dataIndex: 'comprovante',
        //     key: 'comprovante',
        //     align: 'center',
        //     render: (text) => <a>{text}</a>,
        //   },
          {
            title: 'Hierarquia',
            key: 'hierarquia',
            render: (value) => {
                return (
                    <div className='flex w-full justify-between'>
                        <div>
                            {value.adminId === value.usuario.id ? 'ADMINISTRADOR' : 'JOGADOR'}
                        </div>
                        <div className='lacunas5 flex gap-12 mr-4'>
                            {user.userId === value.adminId && value.adminId !== value.usuario.id && (
                                <>
                                    {/* <button className='botaoEditarListagemJogador justify-center items-center flex'>
                                        <img className='lapis' src="../../images/ferramenta-lapis.png" />
                                    </button> */}
                                    <button className='botaoExcluirListagemJogador justify-center items-center flex' onClick={() => {
                                        api.delete('/reserva/add/' + gameId + '/' + value.usuario.email).then(() => {
                                            refetch()
                                        }).catch(() => {
                                            toast('Falha ao remover usuário')
                                        })
                                    }}>
                                        <img className='lapis' src="../../images/lixeira.png" />
                                    </button>
                                </>    
                            )}
                        </div>
                    </div>
                )
            },
          },
    ]
    const { gameId } = useParams();
    // const [searchText, setSearchText] = useState(null);
    const { data: response, refetch } = useQuery({
        queryKey: [gameId],
        queryFn: () => api.get('/reserva/list-users/' + gameId),
        initialData: {
            data: []
        }
    });
    const data = response.data;
    const [isOpenAdd, setIsOpenAdd] = useState(false);
    const [newParticipantEmail, setNewParticipantEmail] = useState();
    const [newParticipantFuncao, setNewParticipantFuncao] = useState();
    const isAdmin = response.data.some(e => e.adminId === user.userId) || user.cargo === 'ADMIN';

    return (
        <div className="container-masterListagemJogador">
            <ToastContainer />
            <Modal
                style={customStyles}
                isOpen={isOpenAdd}
                contentLabel="Example Modal"
            >
                <div className='flex flex-1 justify-end'>
                    <CloseOutlined className='cursor-pointer' onClick={() => {
                        setIsOpenAdd(false)
                        setNewParticipantEmail(null)
                        setNewParticipantFuncao(null)
                    }}/>
                </div>
                <div className='flex flex-col gap-1'>
                    <span>
                        E-mail do participante: 
                    </span>
                    <div className='flex flex-col gap-1'>
                        <Input value={newParticipantEmail} onChange={e => setNewParticipantEmail(e.target.value)} type='text' placeholder='fulano@gmail.com'/>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <span>
                        Função: 
                    </span>
                    <div className='flex flex-col gap-1'>
                        <Select value={newParticipantFuncao} 
                            onChange={e => setNewParticipantFuncao(e)} placeholder='LINHA'
                            options={[
                                {
                                    label: 'Linha',
                                    value: 'LINHA'
                                },
                                {
                                    label: 'Goleiro',
                                    value: 'GOLEIRO'
                                }
                            ]}
                        />
                    </div>
                </div>
                <Button className='mt-3' type='primary' onClick={() => {
                        if (!newParticipantEmail) {
                            toast('Preencha o campo de e-mail')
                        }
                        if (!newParticipantFuncao) {
                            toast('Preencha o campo de função')
                        }
                        api.put('/reserva/add/' + gameId, {
                            email: newParticipantEmail,
                            funcao: newParticipantFuncao
                        }).then(() => {
                            refetch()
                            setIsOpenAdd(false)
                        }).catch(() => {
                            toast('Falha ao adicionar usuário, verifique se o usuário já foi adicionado')
                        })
                    }}>
                        Salvar
                </Button>
            </Modal>
            <div className='topoListagemJogador'>
            </div>
            <div className='meioListagemJogador'>
                <div className='meioEsquerdoListagemJogador'>
                </div>
                <div className='meioCentralListagemJogador'>
                    <div className='topoMeioListagemJogador'>
                        <div className='topoCentralMeioEsquerdoListagemJogador'>
                            <div className="icon-button" onClick={() => navigate(-1)}>
                                <FiArrowLeft className="icon" />
                            </div>
                        </div>
                        <div className='topoCentralMeioLOGOListagemJogador'>
                            <LogoListagemJogador />
                        </div>
                        <div className='topoCentralMeioDireitoListagemJogador flex flex-col gap-8'>
                            {isAdmin && (<button className='bg-[#00FF00] w-52 text-white h-12 py-1 px-3 border-white border-x-2 border-y-2 rounded-md' onClick={() => {
                                setIsOpenAdd(true)
                            }}>Adicionar Participante</button>)}
                            {isAdmin && (<button className='h-12 w-52 bg-red-600 text-white py-1 px-3 border-white border-x-2 border-y-2 rounded-md' onClick={() => {
                                api.delete('/reserva/' + gameId)
                                    .then(() => {
                                        navigate(-1)
                                    })
                                    .catch(() => {
                                        toast.error('Falha ao desmarcar horário')
                                    })
                            }}>Desmarcar Horário</button>)}
                        </div>
                    </div>
                    {/* <div className='meioMeioListagemJogador mb-2'>
                        <Input type='text' placeholder='Buscar participante pelo e-mail' className='max-w-64 border-green-900' onChange={(e) => setSearchText(e.target.value)} />
                        <img className='lupa' src={lupaPng} height={20} width={20} />
                    </div> */}
                    <div className='p-3'>
                        <Table columns={columns} dataSource={data} pagination={{ disabled: true, hideOnSinglePage: true }} />
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
