
import Cadastro from './pages/Cadastro/Cadastro'
import Login from './pages/Login/Login'
import Calendario from './pages/Calendario/Calendario'
import Perfil from './pages/Perfil/Perfil'
import ListaJogo from './pages/ListagemJogo/ListagemJogo'
import ListagemHorarios from './pages/ListagemHorarios/ListagemHorarios'
import LandingPage from './pages/LandingPage/LandingPage'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { AuthComponent } from './components/Authentication/Auth'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { ConfigProvider, theme } from "antd";
const { darkAlgorithm } = theme;

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: darkAlgorithm,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calendar" element={<AuthComponent component={<Calendario />}/>} />
          <Route path="/profile-edit" element={<AuthComponent component={<Perfil />}/>} />
          <Route path="/game-list/:gameId" element={<AuthComponent component={<ListaJogo />}/>} />
          <Route path="/hour-list/:date" element={<AuthComponent component={<ListagemHorarios />}/>} />
          <Route
              path="*"
              element={<Navigate to="/login" replace />}
          />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
