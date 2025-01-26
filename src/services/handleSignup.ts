export const handleSignup = async (
  newId: string,
  newAlias: string,
  newPw: string,
  checkNewPw: string,
  navigate: (path: string) => void
) => {
  if (newPw !== checkNewPw) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }
  const signupData = {
    loginId: newId,
    username: newAlias,
    password: newPw,
  };

  try {
    const response = await fetch("http://15.164.98.149:8080/v1/members/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
      credentials: "include",
    });
    if (response.ok) {
      alert("회원가입에 성공했습니다!");
      navigate("/login");
    } else {
      const errorData = await response.json();
      alert(`회원가입 실패: ${errorData.message}`);
      console.log(`Error status : ${response.status}`);
    }
  } catch (error) {
    console.log("회원가입 요청 중 오류 발생:", error);
    alert("회원가입 요청 중 문제가 발생했습니다.");
  }
};
