import {
    CloseOutlined
} from '@ant-design/icons';
import { Select } from 'antd';
import { format, startOfDay, isEqual, isAfter } from 'date-fns';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { FiArrowLeft } from 'react-icons/fi';
import Modal from 'react-modal';
import { useNavigate } from 'react-router';
import LogoCalendario from '../../components/LogoCalendario/LogoCalendario';
import { useAuth } from '../../components/Authentication/useAuth';

const customStyles = {
    content: {
      top: '50%',
      left: '60%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const hours = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]

const Calendario = () => {
    const {
        user
    } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (user.cargo === 'ADMIN') {
            navigate('/quadra-list', {
                replace: true
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const [date, setDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="h-screen bg-black flex flex-col">
            <div className='flex w-full justify-between'>
                <div className="bg-[#00FF00] mt-2 ml-2 w-10 rounded-[50%] flex justify-center items-center h-10 cursor-pointer" onClick={() => navigate('/login', {
                    replace: true
                })}>
                    <FiArrowLeft className="icon" />
                </div>
                <div className="bg-[#00FF00] mt-2 ml-2 w-10 rounded-[50%] flex justify-center items-center h-10 cursor-pointer" onClick={() => {
                    navigate('/profile-edit')
                }}>
                    <img className='icon' src="../../images/usuario-de-perfil.png" />
                </div>
            </div>
            <div className='flex h-screen'>
                <div className='ml-8 flex justify-center items-center'>
                    <LogoCalendario />
                </div>
                <div className='flex flex-row flex-1 justify-center items-center w-full h-full'>
                    <div className='flex flex-row items-center gap-8 border border-green-400 pr-4'>
                        <Calendar minDate={new Date()} onChange={date => {
                            const currentDate = startOfDay(new Date());
                            const dateParam = startOfDay(date);
                            if (isEqual(currentDate, dateParam) || isAfter(dateParam, currentDate)) {
                                setIsOpen(true);
                                setDate(startOfDay(date));                   
                            }
                        }} value={date} className="w-full h-full" />
                        <Modal
                            style={customStyles}
                            isOpen={isOpen}
                            contentLabel="Example Modal"
                        >
                            <div className='flex flex-1 justify-end'>
                                <CloseOutlined className='cursor-pointer' onClick={() => setIsOpen(false)}/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span>
                                    Selecione seu horario: 
                                </span>
                                <Select 
                                    className='w-72 text-white'
                                    onChange={(e) => {
                                        navigate('/hour-list/' + `${format(date, 'yyyy-MM-dd')}:${e}`);
                                    }}
                                    options={isEqual(startOfDay(new Date()), date) ? hours.filter(h => h > new Date().getHours()).map(h => {
                                        return {
                                            label: `${h}:00`,
                                            value: h
                                        }
                                    }) : hours.map(h => {
                                        return {
                                            label: `${h}:00`,
                                            value: h
                                        }
                                    })}
                                />
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Calendario;
