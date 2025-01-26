/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

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
  return <ButtonStyle onClick={handleLogin}>로그인</ButtonStyle>;
};
export default Button;
