
# ⚽ FUT AGENDA - Frontend  

O **FUT AGENDA** é uma plataforma inovadora que automatiza o processo de aluguel de quadras de futebol, proporcionando uma experiência prática e eficiente para jogadores e administradores de quadras. Este repositório contém o código-fonte do frontend, desenvolvido com **React.js** e integrado ao backend através de **Axios**.  


![borda preta](https://github.com/user-attachments/assets/d0dcc946-d5fd-4a4d-a200-828ac05ab066)

---

## ✨ Funcionalidades Principais  

- **Interface Intuitiva**: Design responsivo e amigável para fácil navegação em diferentes dispositivos.  
- **Cadastro e Login**: Formulários interativos para criação de contas e autenticação de usuários.  
- **Agendamento Simplificado**: Busca por quadras disponíveis com visualização de horários.  
- **Gerenciamento de Grupos**: Adicione e remova jogadores diretamente no sistema.   

---

## 🛠️ Tecnologias Utilizadas  

- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.  
- **Axios**: Para realizar requisições HTTP ao backend.  
- **React Router**: Gerenciamento de rotas para navegação entre páginas.  
- **PostgreSQL**: Banco de dados para persistência e gerenciamento de dados, integrado ao backend.  
- **CSS Modules**: Para estilização modular e reutilizável.  

---

## 📋 Requisitos de Instalação  

- **Node.js** (versão 16 ou superior).  
- **npm** ou **yarn** para gerenciamento de pacotes.  
- Backend do projeto configurado e rodando.  

---

## 🚀 Configuração do Projeto  

1. Clone o repositório:  
   ```bash
   git clone https://github.com/seu-usuario/fut-agenda-frontend.git
   cd fut-agenda-frontend
   ```

2. Instale as dependências:  
   ```bash
   npm install
   ```  
   ou  
   ```bash
   yarn install
   ```

3. Configure o arquivo `.env` para apontar ao backend:  
   ```env
   REACT_APP_API_BASE_URL=http://localhost:8080
   ```

4. Inicie o servidor de desenvolvimento:  
   ```bash
   npm start
   ```  
   ou  
   ```bash
   yarn start
   ```  

5. Acesse a aplicação no navegador:  
   ```plaintext
   http://localhost:3000
   ```

---

## 🗂️ Estrutura de Pastas  

```
src/
├── components/     # Componentes reutilizáveis da aplicação
├── pages/          # Páginas principais do sistema
├── config/       # Configuração de requisições Axios
├── styles/         # Estilos globais e módulos CSS
├── utils/          # Funções auxiliares e constantes
└── App.js          # Componente principal
```

---

## 📜 Scripts Disponíveis  

- **`npm start`** ou **`yarn start`**: Inicia o servidor de desenvolvimento.  
- **`npm run build`** ou **`yarn build`**: Cria a build de produção.  
- **`npm test`** ou **`yarn test`**: Executa os testes disponíveis (se configurados).  

---

## 🔗 Comunicação com o Backend  

A comunicação entre o frontend e o backend é feita via **Axios**, utilizando o endpoint configurado no `.env`. Exemplos de requisições incluem:  

- **Login**: `POST /auth/login`  
- **Cadastro**: `POST /usuarios`  
- **Reservas**: `GET /reservas`  
- **Cancelamento**: `DELETE /reservas/{id}`  

---

## 🤝 Contribuição  

Contribuições são sempre bem-vindas! Para colaborar:  

1. Faça um fork do repositório.  
2. Crie uma nova branch:  
   ```bash
   git checkout -b minha-feature
   ```  
3. Envie suas alterações:  
   ```bash
   git push origin minha-feature
   ```  
4. Abra um Pull Request descrevendo suas alterações.  

---

## 👨‍💻 Autor  

O frontend do **FUT AGENDA** foi projetado para oferecer uma experiência fluida e eficiente na organização de partidas de futebol.  

---

## 📄 Licença  

Este projeto é licenciado sob a [MIT License](LICENSE).


