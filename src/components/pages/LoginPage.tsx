// src/components/login/Main.tsx
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState } from "react";
import Input from "../login/Input";
import Button from "../login/Button";
import GotoJoin from "../login/GotoJoin";
import { useNavigate } from "react-router-dom";

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
  const [PwValid, setPwValid] = useState<boolean>(false);

  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPw(value);
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    setPwValid(regex.test(value));
  };

  const handleLogin = async () => {
    const navigate = useNavigate();
    if (!PwValid) {
      alert(
        "비밀번호는 영문, 숫자, 특수문자를 포함하여 8자 이상이어야 합니다."
      );
      return;
    }
    const loginId = id;
    const password = pw;
    const loginData = { loginId, password };

    try {
      const response = await fetch(
        "http://13.125.208.182:8080/v1/members/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("로그인 성공:", data);
        if (data.accessToken) {
          sessionStorage.setItem("accessToken", data.accessToken);
          console.log(`Token 저장 : ${data.accessToken}`);
          navigate("/home");
        } else {
          console.error("서버로부터 AccessToken을 발급받지 못했습니다.");
        }
      } else {
        console.error("로그인 실패");
        alert("로그인에 실패했습니다. 아이디 또는 비밀번호를 확인하세요.");
      }
    } catch (error) {
      console.error("네트워크 에러:", error);
      alert("서버에 연결할 수 없습니다. 다시 시도해주세요.");
    }
  };

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
            handlePw={handlePw}
            pwValid={PwValid}
          />
          <Button handleLogin={handleLogin} />
        </WrapperStyle>
        <GotoJoin />
      </MainContainerStyle>
    </>
  );
};

export default LoginPage;
