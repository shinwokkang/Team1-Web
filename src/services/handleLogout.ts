import axios from "axios";
// import { useNavigate } from "react-router-dom";

interface logoutProps {
  navigate: (path: string) => void;
}

export const handleLogout = async ({ navigate }: logoutProps) => {
  // const logoutData = { logoutId: id, password: pw };
  // const navigate = useNavigate();

  try {
    const token = sessionStorage.getItem("accessToken");

    // 임시로 만듦. (마이페이지 자체가 접속이 안될테니, 사라질 코드)
    if (!token) {
      alert("이미 로그아웃되었거나 로그인 정보가 없습니다.");
      navigate("/login");
      return;
    }

    const response = await axios.post(
      "http://15.164.98.149:8080/v1/members/login",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status == 200) {
      sessionStorage.removeItem("accessToken");
      alert("로그아웃에 성공했습니다.");
      navigate("/login");
    }
  } catch (error) {
    alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
    console.error("에러 발생", error);
  }
};
