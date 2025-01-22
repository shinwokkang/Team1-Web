// src/components/login/Main.tsx
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState } from "react";
import Input from "../login/Input";
import Button from "../login/Button";
import GotoJoin from "../login/GotoJoin";

const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const MainContainerStyle = styled.div`
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

  p {
    cursor: pointer;
    justify-content: center;
    width: auto;
  }
`;
const LoginPage = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  //   const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setPw(e.target.value);
  //   };
  console.log("로그인 페이지 렌더링");
  return (
    <>
      <MainContainerStyle>
        <h1>로그인</h1>
        <WrapperStyle>
          <Input
            id={id}
            setId={setId}
            pw={pw}
            setPw={setPw}
            //   handlePw={handlePw}
          />
          <Button />
        </WrapperStyle>
        <GotoJoin />
      </MainContainerStyle>
    </>
  );
};

export default LoginPage;
