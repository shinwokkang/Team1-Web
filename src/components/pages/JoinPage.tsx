import Input from "../join/Input";
import Button from "../join/Button";
import styled from "@emotion/styled";
import GotoLogin from "../join/GotoLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    if (newPw !== checkNewPw) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    const signupData = {
      loginId: newId,
      username: newAlias,
      password: newPw,
    };

    try {
      const response = await fetch(
        "http://13.125.208.182:8080/v1/members/join",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(signupData),
          credentials: "include",
        }
      );
      if (response.ok) {
        alert("회원가입에 성공했습니다!");
        navigate("/login");
      } else {
        const errorData = await response.json();
        alert(`회원가입 실패: ${errorData.message}`);
        console.log(`Error status : ${response.status}`);
      }
    } catch (error) {
      console.log("회원가입 요청 중 오류 발생:", error);
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
