// src/components/login/Input.tsx
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import InputItem from "./InputItem";

interface InputProps {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  pw: string;
  setPw?: React.Dispatch<React.SetStateAction<string>>;
  handlePw: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pwValid: boolean;
}

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputWrapStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ErrorMessageStyle = styled.div`
  color: #ef0000;
  font-size: 12px;
`;

const Input = ({ id, setId, pw, pwValid, handlePw }: InputProps) => {
  return (
    <InputStyle>
      <InputWrapStyle>
        <InputItem
          content="아이디를 입력해주세요."
          type="text"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <InputItem
          content="비밀번호를 입력해주세요."
          type="password"
          value={pw}
          onChange={handlePw}
        />
      </InputWrapStyle>

      <ErrorMessageStyle>
        {!pwValid && pw.length > 0 && (
          <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
        )}
      </ErrorMessageStyle>
    </InputStyle>
  );
};

export default Input;
