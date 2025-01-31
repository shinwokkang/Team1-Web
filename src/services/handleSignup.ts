export const handleSignup = async (
  newId: string,
  newAlias: string,
  newPw: string,
  checkNewPw: string,
  navigate: (path: string) => void
) => {
  if (newAlias.length == 0) {
    alert("별명 입력해주세요.");
    return;
  }
  if (newId.length == 0) {
    alert("아이디를 입력해주세요.");
    return;
  }
  if (newPw.length == 0) {
    alert("비밀번호를 입력해주세요.");
    return;
  }
  if (newPw !== checkNewPw && checkNewPw.length == 0) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }
  const signupData = {
    loginId: newId,
    username: newAlias,
    password: newPw,
  };

  try {
    const response = await fetch("http://43.201.23.0:8080/v1/members/join", {
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
