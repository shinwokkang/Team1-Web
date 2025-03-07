import instance from "../components/api/axios";

interface signupProps {
  newId: string;
  newAlias: string;
  newPw: string;
  checkNewPw: string;
  navigate: (path: string) => void;
}

export const handleSignup = async ({
  newId,
  newAlias,
  newPw,
  checkNewPw,
  navigate,
}: signupProps) => {
  if (!newAlias || !newId || !newPw || newPw !== checkNewPw) {
    // 여기 if 문 사용해서 해야될랑가
    alert("입력 정보를 확인해주세요.");
    return;
  }

  try {
    await instance.post("/members/join", {
      loginId: newId,
      username: newAlias,
      password: newPw,
    });
    alert("회원가입에 성공했습니다!");
    navigate("/login");
  } catch (error: any) {
    alert(`회원가입 실패: ${error.response?.data?.message || "오류 발생"}`);
    console.error("회원가입 요청 중 오류 발생:", error);
  }
};
