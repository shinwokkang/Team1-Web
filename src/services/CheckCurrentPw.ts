export const checkCurrentPw = (inputPw: string): boolean => {
  const savedPw = sessionStorage.getItem("password");
  if (savedPw !== inputPw) {
    console.log("비밀번호 일치하지 않음.");
    return false;
  } else {
    alert("✅ 확인되었습니다!");
    return true;
  }
};
