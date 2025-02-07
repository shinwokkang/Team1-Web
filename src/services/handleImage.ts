import axios from "axios";

// 서버 주소 입력 (Ip 수정 필요 시 ip 수정)
const serverUrl = "http://15.164.98.149:8080/v1";

const api = axios.create({
  baseURL: serverUrl,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// 이미지 업로드드
export const uploadImage = async (
  memberId: string,
  file: File
): Promise<string | null> => {
  // FormData를 사용하여 header에     "Content-Type": "multipart/form-data", 를 넣음.
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await api.post(
      `/members/profile-image/${memberId}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.data.imageUrl;
  } catch (error) {
    console.error("이미지 업로드 실패:", error);
    return null;
  }
};

// 이미지 가져오기기
export const fetchProfileImage = async (
  memberId: string
): Promise<string | null> => {
  try {
    const response = await api.get(`/members/profile-image/${memberId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data.imageUrl;
  } catch (error) {
    console.error("프로필 이미지 가져오기 실패:", error);
    return null;
  }
};

// 프로필 이미지 삭제
export const deleteImage = async (memberId: string): Promise<boolean> => {
  try {
    await api.delete(`/members/profile-image/${memberId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return true;
  } catch (error) {
    console.error("이미지 삭제 실패:", error);
    return false;
  }
};
