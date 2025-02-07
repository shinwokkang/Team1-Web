import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { updateAlias, fetchAlias } from "../../services/handleAlias";
import { IoChevronForward } from "react-icons/io5"; // ">" 아이콘

const AliasUpdater = ({ memberId }: { memberId: string }) => {
  const [currentAlias, setCurrentAlias] = useState<string>("");
  const [newAlias, setNewAlias] = useState<string>("");
  const [isDuplicate, setIsDuplicate] = useState<boolean>(false);

  useEffect(() => {
    const loadAlias = async () => {
      const alias = await fetchAlias(memberId);
      if (alias) setCurrentAlias(alias);
    };
    loadAlias();
  }, [memberId]);

  const handleAliasChange = async () => {
    if (!newAlias.trim()) return; // 빈 값 방지

    const success = await updateAlias(memberId, newAlias);
    if (success) {
      alert("변경 완료!");
      setCurrentAlias(newAlias);
      setNewAlias(""); // 입력 필드 초기화
      setIsDuplicate(false);
    } else {
      setIsDuplicate(true);
    }
  };

  return (
    <Container>
      <AliasRow>
        {/* 현재 별명 */}
        <CurrentAliasWrapper>
          <Label>현재 별명 :</Label>
          <CurrentAlias>{currentAlias}</CurrentAlias>
        </CurrentAliasWrapper>

        {/* ">" 아이콘 */}
        <IconWrapper>
          <IoChevronForward size={22} color="black" />
        </IconWrapper>

        {/* 새 별명 입력 */}
        <NewAliasWrapper>
          <Label>새로운 별명 :</Label>
          <InputWrapper>
            <Input
              type="text"
              value={newAlias}
              onChange={(e) => {
                setNewAlias(e.target.value);
                setIsDuplicate(false);
              }}
            />
          </InputWrapper>
        </NewAliasWrapper>

        {/* 바꾸기 버튼 */}
        <ChangeButtonWrap>
          <ChangeButton onClick={handleAliasChange}>바꾸기</ChangeButton>
        </ChangeButtonWrap>
      </AliasRow>

      {/* 중복 오류 메시지 */}
      {isDuplicate && <ErrorMessage>사용중인 별명입니다 !</ErrorMessage>}
    </Container>
  );
};

export default AliasUpdater;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 40px; /* 🔹 ProfileImageUploader와 적당한 간격 확보 */
  margin-top: 80px;
  padding: 20px;

  width: 65%;
`;

const AliasRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px; /* 🔹 요소 간격 조정 */

  margin: 0px;
  padding-left: 100px;
  font-size: 18px;
  width: 100%;
`;

const CurrentAliasWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  // align-items: center;
  width: 250px; /* 🔹 고정된 크기로 정렬 유지 */
  gap: 10px;
  border-bottom: 5px solid #003363;
`;

const Label = styled.span`
  font-weight: bold;
`;

const CurrentAlias = styled.span`
  font-weight: bold;
  font-size: 22px;
`;

const NewAliasWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 250px;

  border-bottom: 5px solid #e3e3e3;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 5px;
  border: none;
  outline: none;
  width: 130px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70px;
`;

const ChangeButtonWrap = styled.div`
  padding-left: 20px;
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

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 4px;
  align-self: flex-start;
`;
