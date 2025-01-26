/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const ButtonStyle = styled.button`
  cursor: pointer;
  color: white;
  background-color: rgb(0, 0, 128);
  font-weight: bold;
  font-size: large;
  border: none;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  margin-top: 30px;
`;

const Button = ({ handleLogin }: { handleLogin: () => void }) => {
  const navigate = useNavigate();

  const onClick = () => {
    handleLogin();
    navigate("/home"); // handleLogin 실행 후 네비게이트
  };
  return <ButtonStyle onClick={onClick}>로그인</ButtonStyle>;
};
export default Button;
