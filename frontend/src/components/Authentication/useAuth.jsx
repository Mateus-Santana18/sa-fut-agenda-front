import { useSessionStorage } from "@uidotdev/usehooks";
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [token, setToken] = useSessionStorage('token');
  const [user, setUser] = useSessionStorage('user');
  const navigate = useNavigate();

  const saveToken = (response) => {
    setUser(response)
    setToken(response.token);
    navigate('/calendar');
  };

  const logout = () => {
    setToken(null);
    window.localStorage.clear();
  };

  const isAuthenticated = !!token;

  return { saveToken, isAuthenticated, user, logout };
};
