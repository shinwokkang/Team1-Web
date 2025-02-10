import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/Homepage.tsx";
import NavBar from "./components/nav/NavBar.tsx";
import GlobalStyle from "./components/style/GlobalStyle.tsx";
import LoginPage from "./components/pages/LoginPage.tsx";
import JoinPage from "./components/pages/JoinPage.tsx";
import MyPage from "./components/pages/MyPage.tsx";
import ChangePwpage from "./components/pages/ChangepwPage.tsx";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/join" element={<JoinPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<MyPage />} />
          <Route path="/changePw" element={<ChangePwpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
