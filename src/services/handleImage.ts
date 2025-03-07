import instance from "../components/api/axios";

export const uploadImage = async (
  memberId: string,
  file: File
): Promise<string | null> => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await instance.post(
      `/members/profile-image/${memberId}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data.imageUrl;
  } catch (error) {
    console.error("이미지 업로드 실패:", error);
    return null;
  }
};

export const fetchProfileImage = async (
  memberId: string
): Promise<string | null> => {
  try {
    const response = await instance.get(`/members/profile-image/${memberId}`);
    return response.data.imageUrl;
  } catch (error) {
    console.error("프로필 이미지 가져오기 실패:", error);
    return null;
  }
};

export const deleteImage = async (memberId: string): Promise<boolean> => {
  try {
    await instance.delete(`/members/profile-image/${memberId}`);
    return true;
  } catch (error) {
    console.error("이미지 삭제 실패:", error);
    return false;
  }
};
