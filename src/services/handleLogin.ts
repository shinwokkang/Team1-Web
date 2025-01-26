export const handleLogin = async (
  id: string,
  pw: string,
  navigate: (path: string) => void
) => {
  const regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  if (!regex.test(pw)) {
    alert("비밀번호는 영문, 숫자, 특수문자를 포함하여 8자 이상이어야 합니다.");
    return;
  }

  const loginData = { loginId: id, password: pw };

  try {
    const response = await fetch("http://15.164.98.149:8080/v1/members/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("로그인 성공:", data);

      if (data.accessToken) {
        sessionStorage.setItem("accessToken", data.accessToken);
        console.log(`Token 저장 : ${data.accessToken}`);
        navigate("/home");
      } else {
        console.error("서버로부터 AccessToken을 발급받지 못했습니다.");
      }
    } else {
      console.error("로그인 실패");
      alert("로그인에 실패했습니다. 아이디 또는 비밀번호를 확인하세요.");
    }
  } catch (error) {
    console.error("네트워크 에러:", error);
    alert("서버에 연결할 수 없습니다. 다시 시도해주세요.");
  }
};
