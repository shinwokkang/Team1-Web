import styled from "@emotion/styled";
import ChangePwOrLogout from "../my/ChangePwOrLogout";
import ProfileImageUploader from "../my/ProfileImageUploader";
import AliasUpdater from "../my/AliasUpdater";

const MyPage = () => {
  const memberId = sessionStorage.getItem("member_id") || "";
  return (
    <Container>
      <ChangePwOrLogout />
      <ContentWrapper>
        <ProfileImageUploader memberId={memberId} />
        <AliasUpdater memberId={memberId} />
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
