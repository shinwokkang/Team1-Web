import axios from "axios";

const serverUrl = "http://15.164.98.149:8080/v1";

const api = axios.create({
  baseURL: serverUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchAlias = async (memberId: string): Promise<string | null> => {
  try {
    const response = await api.get(`/members/${memberId}/username`);
    return response.data.username;
  } catch (error) {
    console.error("별명 불러오기 실패:", error);
    return null;
  }
};

export const updateAlias = async (
  memberId: string,
  newAlias: string
): Promise<boolean> => {
  try {
    await api.put(
      `/members/${memberId}/username`,
      { username: newAlias },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      }
    );
    return true;
  } catch (error: any) {
    // 🔹 409 Conflict: 별명 중복
    if (error.response?.status === 409) {
      return false;
    }
    console.error("별명 변경 실패:", error);
    return false;
  }
};
