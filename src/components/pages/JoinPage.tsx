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

  const handleSignup = async () => {
    if (newPw !== checkNewPw) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    const signupData = {
      id: newId,
      password: newPw,
      alias: newAlias,
    };

    try {
      const response = await fetch("http://members/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData),
      });

      if (response.ok) {
        alert("회원가입에 성공했습니다!");
        window.location.href = "/login";
      } else {
        const errorData = await response.json();
        alert(`회원가입 실패: ${errorData.message}`);
      }
    } catch (error) {
      console.error("회원가입 요청 중 오류 발생:", error);
      alert("회원가입 요청 중 문제가 발생했습니다.");
    }
  };

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
          <Button handleSignup={handleSignup} />
          <GotoLogin />
        </JoinWperStyle>
      </JoinContainerStyle>
    </>
  );
};

export default JoinPage;
