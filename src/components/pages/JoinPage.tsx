import Input from "../join/Input";
import Button from "../join/Button";
import styled from "@emotion/styled";
import GotoLogin from "../join/GotoLogin";
import { useState } from "react";

const JoinContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 25%;
  height: 60%;
  justify-content: center;
  align-items: center;

  /* 페이지 전체 화면에서 중앙 정렬 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    font-size: 40px;
  }
`;

const JoinWperStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  width: 100%;
`;

const JoinPage = () => {
  const [newId, setNewId] = useState<string>("");
  const [newPw, setNewPw] = useState<string>("");
  const [checkNewPw, setCheckNewPw] = useState<string>("");
  const [newAlias, setNewAlias] = useState<string>("");
  return (
    <>
      <JoinContainerStyle>
        <h1>회원가입</h1>
        <JoinWperStyle>
          <Input
            newAlias={newAlias}
            setNewAlias={setNewAlias}
            newId={newId}
            setNewId={setNewId}
            newPw={newPw}
            setNewPw={setNewPw}
            checkNewPw={checkNewPw}
            setCheckNewPw={setCheckNewPw}
          />
          <Button />
          <GotoLogin />
        </JoinWperStyle>
      </JoinContainerStyle>
    </>
  );
};

export default JoinPage;
