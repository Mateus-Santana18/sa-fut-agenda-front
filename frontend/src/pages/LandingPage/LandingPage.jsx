import { useNavigate } from 'react-router';
import LogoLandingPage from '../../components/LogoLandingPage/LogoLandingPage';
import './LandingPage.css';
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container-Landing">
      <div className='topo-Landing'>
        <label className='LblTopo-Landing text-white'>Conheça o Fut Agenda</label>
      </div>
      <div className='meio-Landing'>
        <div className='divLogoLanding'><LogoLandingPage/>
        </div>
        <div className='divTituloLanding'>
          <label className='LblTitulo-Landing'>Fut Agenda</label>
        </div>
        <div className='divBotaoLading'>
          <button className='botaoVisiteLading' onClick={() => navigate('/login')}> Visite nosso página</button>
        </div>
        <div className='divInfoLanding'>
          <div className='lblPosicaolanding'>
            <label className='LblinfoLanding'>Informações</label>
          </div>
        </div>
        <div className='divPrimeiraFotoLanding'>
          <div className='quadradoFotoLanding'>  
            <div className='foto1Landing'>
              {/* foto */}
              <img src="./images/gramado.png" height={505} width={795}/>
            </div>
          </div>
          <div className='quadradoEscritaLanding'>
            <div className='tituloEscrita1'>Sobre nós</div>
            <div className='escrita1Landing'>   
            <label className='escritaLblLanding text-white'>Fut Agenda é um aplicativo inovador para a gestão de campos de futebol. Ele facilita o aluguel de horários, a gestão de calendários e o controle financeiro para donos de campos. Os jogadores também se beneficiam ao visualizar horários, alugar campos e convidar amigos para jogos. Simplifique sua rotina esportiva com o Fut Agenda!</label>
            </div>
          </div>
        </div>
        <div className='divPrimeiraFotoLanding'>
          <div className='quadradoEscritaLanding'>
          <div className='tituloEscrita1'>Gerencia seu campo</div>
            <div className='escrita1Landing'>     
            <label className='escritaLblLanding text-white'>Nossa plataforma facilita a gestão de campos de futebol, permitindo controle de horários, tarifas, usuários e finanças em tempo real, além de otimizar a ocupação e criar estratégias de marketing.</label>
            </div>
          </div>
          <div className='quadradoFotoLanding'>  
            <div className='foto1Landing'>
              {/* foto */}
              <img src="./images/footbool.png" height={505} width={795}/>
            </div>
          </div>
        </div>
        <div className='divPrimeiraFotoLanding'>
          <div className='quadradoFotoLanding'>  
            <div className='foto1Landing'>
              {/* foto */}
              <img src="./images/fotoChuteBola.jpg" height={505} width={795}/>
            </div>
          </div>
          <div className='quadradoEscritaLanding'>
          <div className='tituloEscrita1'>Agende e jogue</div>
            <div className='escrita1Landing'>     
            <label className='escritaLblLanding text-white'>Nosso app permite alugar campos de futebol de forma simples, com reservas em tempo real e opções de jogos privados ou abertos.Entre no jogo com praticidade e diversão – o campo é seu, a vitória é nossa! Entre no jogo com praticidade e diversão – o campo é seu, a vitória é nossa! </label>
            </div>
          </div>
        </div>
      </div>
      <div className='baixo-Landing'>
        <img src="./images/instagram.png" height={75} width={75}/>
        <label className='lblFooter'>Copyright © 2024 Fut Agenda – Todos os direitos reservados.</label>
        <div className='linhaLanding'></div>
        <label className='lblFooter'>Desenvolvido por futagenda@gmail.com</label>
      </div>
    </div>
  );
};

export default LandingPage;
