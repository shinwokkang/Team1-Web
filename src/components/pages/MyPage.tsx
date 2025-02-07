import styled from "@emotion/styled";
import ChangePwOrLogout from "../my/ChangePworLogout";
import ProfileImageUploader from "../my/ProfileImageUploader";
import AliasUpdater from "../my/AliasUpdater";

const MyPage = () => {
  return (
    <Container>
      <ChangePwOrLogout />
      <ContentWrapper>
        <ProfileImageUploader />
        <AliasUpdater />
      </ContentWrapper>
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  position: relative; /* 🔹 ChangePwOrLogout을 절대 위치로 배치하기 위해 필요 */
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center; /* 🔹 세로 중앙 정렬 */
  gap: 20px; /* 🔹 ProfileImageUploader와 AliasUpdater 사이 간격 */
  padding: 80px; /* 🔹 원하는 여백 추가 */
`;
