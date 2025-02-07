import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { IoPerson } from "react-icons/io5";
import {
  uploadImage,
  fetchProfileImage,
  deleteImage,
} from "../../services/handleImage";

const ProfileImageUploader = ({ memberId }: { memberId: string }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      const url = await fetchProfileImage(memberId);
      setImageUrl(url);
    };
    loadImage();
  }, [memberId]);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const uploadedUrl = await uploadImage(memberId, file);
      if (uploadedUrl) setImageUrl(uploadedUrl);
    }
  };

  const handleImageRemove = async () => {
    const success = await deleteImage(memberId);
    if (success) setImageUrl(null);
  };

  return (
    <Container>
      <ImageWrapper>
        {imageUrl ? (
          <ProfileImage src={imageUrl} alt="Profile" />
        ) : (
          <DefaultIcon />
        )}
      </ImageWrapper>
      <ButtonWrapper>
        <label htmlFor="imageUpload">업로드</label>
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          hidden
        />
        <Separator>|</Separator>
        <button onClick={handleImageRemove}>삭제</button>
      </ButtonWrapper>
    </Container>
  );
};

export default ProfileImageUploader;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  // margin-left: 20px;
  padding-left: 80px;
  padding-top: 50px;
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f0f0f0;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DefaultIcon = styled(IoPerson)`
  font-size: 50px;
  color: gray;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;

  label,
  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    transition: background 0.2s;
  }

  label:hover,
  button:hover {
    background: lightgray; /* 🔹 마우스 호버 시 연한 회색 */
    border-radius: 30%;
  }

  label:active,
  button:active {
    background: gray; /* 🔹 클릭 시 진한 회색 */
  }
`;

const Separator = styled.span`
  margin: 0 5px;
  color: gray;
`;
