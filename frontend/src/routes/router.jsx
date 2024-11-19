import { AuthProvider } from "../context/AuthContext";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";

<AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>