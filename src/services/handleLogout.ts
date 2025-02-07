import axios from "axios";

const serverUrl = "http://15.164.98.149:8080/v1";

const api = axios.create({
  baseURL: serverUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const handleLogout = async (): Promise<boolean> => {
  try {
    await api.post(
      "/members/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      }
    );
    sessionStorage.removeItem("accessToken");
    return true;
  } catch (error) {
    console.error("로그아웃 실패:", error);
    return false;
  }
};
