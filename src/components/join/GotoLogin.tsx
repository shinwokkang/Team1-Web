/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const GotoLoginContainer = styled.div`
  font-size: 16px;
  color: gray;
  display: flex;
  justify-content: center;
`;

const UnderlinedLink = styled.u`
  color: gray;
  cursor: pointer;
  text-decoration: underline;
  justify-content: center;

  &:hover {
    color: black;
  }
`;

const GotoLogin = () => {
  const navigate = useNavigate();
  const handleGotoLogin = () => {
    navigate("/login"); // 로그인 후 이동할 경로
  };
  return (
    <div>
      <GotoLoginContainer>
        이미 계정이 있으신가요?
        <UnderlinedLink onClick={handleGotoLogin}> 로그인</UnderlinedLink>
      </GotoLoginContainer>
    </div>
  );
};

export default GotoLogin;
