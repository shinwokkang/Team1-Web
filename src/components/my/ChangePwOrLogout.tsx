import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../services/handleLogout";

const ChangePwOrLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    const success = await handleLogout();
    if (success) {
      navigate("/login");
    } else {
      alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <Container>
      <button onClick={() => navigate("/changePw")}>비밀번호 변경</button>
      <Separator>|</Separator>
      <button onClick={logout}>로그아웃</button>
    </Container>
  );
};

export default ChangePwOrLogout;

const Container = styled.div`
  position: absolute;
  top: 60px;
  right: 60px;
  display: flex;
  align-items: center;
  font-size: 14px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    transition: background 0.2s;

    font-weight: bold;
  }

  button:hover {
    background: lightgray;
  }

  button:active {
    background: gray;
  }
`;

const Separator = styled.span`
  margin: 0 5px;
  color: gray;
`;
