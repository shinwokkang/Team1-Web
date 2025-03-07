import instance from "../components/api/axios";

interface loginProps {
  id: string;
  pw: string;
  navigate: (path: string) => void;
}

export const handleLogin = async ({ id, pw, navigate }: loginProps) => {
  const regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!regex.test(pw)) {
    alert("비밀번호는 영문, 숫자, 특수문자를 포함하여 8자 이상이어야 합니다.");
    return;
  }

  try {
    const response = await instance.post("/members/login", {
      loginId: id,
      password: pw,
    });

    if (response.data.accessToken) {
      sessionStorage.setItem("accessToken", response.data.accessToken);
      sessionStorage.setItem("refreshToken", response.data.refreshToken);
      sessionStorage.setItem("member_id", response.data.member_id);
      sessionStorage.setItem("id", id);
      sessionStorage.setItem("password", pw);
      navigate("/home");
    } else {
      console.error("서버로부터 AccessToken을 발급받지 못했습니다.");
    }
  } catch (error) {
    console.error("로그인 실패:", error);
    alert("로그인에 실패했습니다. 아이디 또는 비밀번호를 확인하세요.");
  }
};
