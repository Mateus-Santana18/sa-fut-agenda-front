import './ListagemQuadraCrud.css';
import { FiArrowLeft } from 'react-icons/fi';
import LogoListagemJogador from '../../components/LogoListagemJogador/LogoListagemJogador';
import { useNavigate, useParams } from 'react-router';
import { Button, Input, Select, Table } from 'antd';
import api from '../../config/axios';
import Modal from 'react-modal';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../components/Authentication/useAuth';
import { CloseOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
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

const ListagemQuadraCrud = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    
    const columns = [
        {
            title: 'Nome',
            key: 'name',
            align: 'center',
            render: (value) => <a>{value.nome}</a>,
          },
          {
            title: 'Tipo',
            key: 'tipo',
            align: 'center',
            render: (text) => <a>{text.tipo}</a>,
          },
    ]
    // const [searchText, setSearchText] = useState(null);
    const { data: response, refetch } = useQuery({
        queryKey: [],
        queryFn: () => api.get('/quadra'),
        initialData: {
            data: []
        }
    });
    useEffect(() => {
        if (user.cargo !== 'ADMIN') {
            navigate(-1)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const data = response.data;
    const [isOpenAdd, setIsOpenAdd] = useState(false);
    const [newParticipantEmail, setNewParticipantEmail] = useState();
    const [newParticipantFuncao, setNewParticipantFuncao] = useState();
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
                        Nome da quadra: 
                    </span>
                    <div className='flex flex-col gap-1'>
                        <Input value={newParticipantEmail} onChange={e => setNewParticipantEmail(e.target.value)} type='text' placeholder='quadra'/>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <span>
                        Tipo: 
                    </span>
                    <div className='flex flex-col gap-1'>
                        <Select value={newParticipantFuncao} 
                            defaultValue={'SOCIETY'}
                            onChange={e => setNewParticipantFuncao(e)} placeholder='Society'
                            options={[
                                {
                                    label: 'Society',
                                    value: 'SOCIETY'
                                },
                                {
                                    label: 'Grama',
                                    value: 'GRAMA'
                                },
                                {
                                    label: 'Futsal',
                                    value: 'FUTSAL'
                                }
                            ]}
                        />
                    </div>
                </div>
                <Button className='mt-3' type='primary' onClick={() => {
                        if (!newParticipantEmail) {
                            toast('Preencha o campo nome')
                        }
                        if (!newParticipantFuncao) {
                            toast('Preencha o campo tipo')
                        }
                        api.post('/quadra', {
                            nome: newParticipantEmail,
                            tipo: newParticipantFuncao
                        }).then(() => {
                            refetch()
                            setIsOpenAdd(false)
                        }).catch(() => {
                            toast('Falha ao adicionar quadra, verifique se a quadra já foi adicionada')
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
                            <button className='bg-[#00FF00] w-52 text-white h-12 py-1 px-3 border-white border-x-2 border-y-2 rounded-md' onClick={() => {
                                setIsOpenAdd(true)
                            }}>Adicionar Quadra</button>
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

export default ListagemQuadraCrud;
