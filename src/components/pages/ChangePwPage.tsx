import { useState } from "react";
import styled from "@emotion/styled";
import { handleChangePw } from "../../services/handleChangePw";
import { checkCurrentPw } from "../../services/CheckCurrentPw";
import { IoChevronForward } from "react-icons/io5";

const ChangePwPage = ({ memberId }: { memberId: string }) => {
  const [currentPw, setCurrentPw] = useState(""); // 🔹 현재 비밀번호 추가
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [pwError, setPwError] = useState(""); // 🔹 상태 추가
  const [confirmError, setConfirmError] = useState("");
  const [isCurrentPwChecked, setIsCurrentPwChecked] = useState(false);
  const [checkMessage, setCheckMessage] = useState<string | null>(null);

  const handleCheckCurrentPw = () => {
    if (checkCurrentPw(currentPw)) {
      setIsCurrentPwChecked(true);
      setCheckMessage("확인되었습니다.");
    } else {
      setCheckMessage("현재 비밀번호와 일치하지 않습니다.");
    }
  };

  const handleSubmit = async () => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!regex.test(newPw)) {
      setPwError(
        "비밀번호는 영문, 숫자, 특수문자를 포함하여 8자 이상이어야 합니다."
      );
      return;
    }

    if (newPw !== confirmPw) {
      setConfirmError("비밀번호가 일치하지 않습니다.");
      return;
    }

    setPwError("");
    setConfirmError("");

    const success = await handleChangePw(memberId, currentPw, newPw);
    if (success) {
      sessionStorage.setItem("password", newPw);
      alert("비밀번호가 변경되었습니다.");
      setCurrentPw("");
      setNewPw("");
      setConfirmPw("");
      setIsCurrentPwChecked(false);
      setCheckMessage(null);
    }
  };
  return (
    <PageWrapper>
      <Container>
        <PwRow>
          {/* 현재 비밀번호 입력 */}
          <CurrentPwContainer>
            <CurrentPwWrapper>
              <Label>현재 비밀번호 :</Label>
              <InputWrapper>
                <Input
                  type="password"
                  value={currentPw}
                  onChange={(e) => setCurrentPw(e.target.value)}
                  placeholder="현재 비밀번호 입력"
                />
              </InputWrapper>
            </CurrentPwWrapper>
            {checkMessage && (
              <ErrorMessage isSuccess={checkMessage === "확인되었습니다."}>
                {checkMessage}
              </ErrorMessage>
            )}
          </CurrentPwContainer>
          <CheckButton onClick={handleCheckCurrentPw}>확인</CheckButton>

          <IconWrapper>
            <IoChevronForward size={22} color="black" />
          </IconWrapper>

          <NewPasswordWrapper>
            <NewPwWrapper>
              <Label>새로운 비밀번호 :</Label>
              <Input
                type="password"
                value={newPw}
                onChange={(e) => {
                  setNewPw(e.target.value);
                  setPwError("");
                }}
                placeholder="새 비밀번호 입력"
              />
            </NewPwWrapper>

            <ConfirmPwWrapper>
              <Label>비밀번호 확인 :</Label>
              <Input
                type="password"
                value={confirmPw}
                onChange={(e) => {
                  setConfirmPw(e.target.value);
                  setConfirmError("");
                }}
                placeholder="새 비밀번호 재입력"
              />
            </ConfirmPwWrapper>
          </NewPasswordWrapper>
        </PwRow>

        {/* {checkMessage && <ErrorMessage>{checkMessage}</ErrorMessage>} */}
        {pwError && <ErrorMessage>{pwError}</ErrorMessage>}
        {confirmError && <ErrorMessage>{confirmError}</ErrorMessage>}

        <ChangeButtonWrap>
          <ChangeButton onClick={handleSubmit} disabled={!isCurrentPwChecked}>
            바꾸기
          </ChangeButton>
        </ChangeButtonWrap>
      </Container>
    </PageWrapper>
  );
};

export default ChangePwPage;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
  width: 70%;
`;

const PwRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  margin: 0px;

  font-size: 18px;
  width: 100%;
`;

const CurrentPwWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  gap: 10px;
  border-bottom: 5px solid #003363;
`;

const Label = styled.span`
  font-weight: bold;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  font-size: 14px;
  padding: 5px;
  border: none;
  outline: none;
  width: 180px;
`;

const CheckButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 5px 10px;
  border: 2px solid #000;
  border-radius: 10px;
  background: #e3e3e3;
  cursor: pointer;
  &:hover {
    background: #868e96;
    color: #003363;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70px;
`;

const NewPasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  max-width: 300px;
`;

const NewPwWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 320px;
  gap: 10px;
  border-bottom: 5px solid #e3e3e3;
`;

const ConfirmPwWrapper = styled.div`
  display: flex;
  flex-direction: row;

  gap: 10px;
  width: 310px;
  border-bottom: 5px solid #e3e3e3;
`;

const ChangeButtonWrap = styled.div`
  margin-top: 20px;
  margin-right: 100px;
`;

const ChangeButton = styled.button`
  width: 80px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 12px;
  border: 2px solid #000;
  border-radius: 15px;
  background: #e3e3e3;
  cursor: pointer;
  transition: background 0.5s, border-color 0.2s;

  &:hover {
    background: #868e96;
    color: #003363;
  }
`;

const ErrorMessage = styled.span<{ isSuccess?: boolean }>`
  font-size: 12px;
  margin-top: 4px;
  align-self: flex-end;
  width: 100%;
  color: ${(props) =>
    props.isSuccess ? "blue" : "red"}; // ✅ 파란색 또는 빨간색 적용
`;

const CurrentPwContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // 왼쪽 정렬
  gap: 5px; // 입력 필드와 메시지 간격 조절
`;
