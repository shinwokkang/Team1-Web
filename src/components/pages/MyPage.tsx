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
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 80px;
`;
