import InputItem from "./InputItem";
import styled from "@emotion/styled";
import { useState } from "react";

interface InputProps {
  newPw: string;
  setNewPw: React.Dispatch<React.SetStateAction<string>>;
  newId: string;
  setNewId: React.Dispatch<React.SetStateAction<string>>;
  newAlias: string;
  setNewAlias: React.Dispatch<React.SetStateAction<string>>;
  checkNewPw: string;
  setCheckNewPw: React.Dispatch<React.SetStateAction<string>>;
}

const InputWrapStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ErrorMessageStyle = styled.div`
  color: #ef0000;
  font-size: 12px;
`;

const PwMismatchStyle = styled.div`
  color: #ef0000;
  font-size: 12px;
`;

const Input = ({
  newId,
  setNewId,
  newPw,
  setNewPw,
  newAlias,
  setNewAlias,
  checkNewPw,
  setCheckNewPw,
}: InputProps) => {
  const [newPwValid, setNewPwValid] = useState<boolean>(false);

  const handleNewPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewPw(value);
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (regex.test(newPw)) {
      setNewPwValid(true);
    } else {
      setNewPwValid(false);
    }
  };

  const handleNewId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewId(value);
  };

  const handleNewAlias = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewAlias(value);
  };

  const handleCheckNewPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCheckNewPw(value);
  };

  return (
    <InputWrapStyle>
      <InputItem
        content="별명"
        value={newAlias}
        onChange={handleNewAlias}
        type="text"
      />
      <InputItem
        content="아이디"
        value={newId}
        onChange={handleNewId}
        type="text"
      />
      <InputItem
        content="비밀번호"
        value={newPw}
        onChange={handleNewPw}
        type="password"
      />
      <ErrorMessageStyle>
        {!newPwValid && newPw.length > 0 && (
          <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
        )}
      </ErrorMessageStyle>

      <InputItem // 비밀 번호 다를 때 코드 추가가
        content="비밀번호 확인"
        value={checkNewPw}
        onChange={handleCheckNewPw} // 변경사항 생길 것 같음
        type="password"
      />
      <PwMismatchStyle>
        {newPw != checkNewPw && checkNewPw.length >= 1 && (
          <div>비밀번호가 일치하지 않습니다.</div>
        )}
      </PwMismatchStyle>
    </InputWrapStyle>
  );
};

export default Input;
