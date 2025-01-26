/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const GotoJoinContainer = styled.div`
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

const GotoJoin = () => {
  const navigate = useNavigate();
  const handleGotoJoin = () => {
    navigate("/join"); // 로그인 후 이동할 경로
  };
  return (
    <GotoJoinContainer>
      아직 계정이 없으신가요? &nbsp;
      <UnderlinedLink onClick={handleGotoJoin}>회원가입</UnderlinedLink>
    </GotoJoinContainer>
  );
};

export default GotoJoin;
