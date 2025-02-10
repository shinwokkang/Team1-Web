import axios from "axios";

export const handleChangePw = async (
  memberId: string, // 🔹 memberId 추가
  currentPassword: string,
  newPassword: string
): Promise<boolean> => {
  try {
    const response = await axios.post(`/members/password/${memberId}`, {
      currentPassword,
      newPassword,
    });
    alert(response.data.message);
    sessionStorage.setItem("password", newPassword);
    return true;
  } catch (error: any) {
    alert(error.response?.data?.message || "비밀번호 변경에 실패했습니다.");
    return false;
  }
};
