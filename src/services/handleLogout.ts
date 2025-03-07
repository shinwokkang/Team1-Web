import instance from "../components/api/axios";

export const handleLogout = async (): Promise<boolean> => {
  try {
    await instance.post("/members/logout");
    sessionStorage.removeItem("accessToken");
    return true;
  } catch (error) {
    console.error("로그아웃 실패:", error);
    return false;
  }
};
