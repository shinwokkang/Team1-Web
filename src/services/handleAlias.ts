import instance from "../components/api/axios";

export const fetchAlias = async (memberId: string): Promise<string | null> => {
  try {
    const response = await instance.get(`/members/${memberId}/username`);
    return response.data.username;
  } catch (error) {
    console.error("별명 불러오기 실패:", error);
    return null;
  }
};

export const updateAlias = async (
  memberId: string,
  newAlias: string
): Promise<boolean> => {
  try {
    await instance.put(`/members/${memberId}/username`, { username: newAlias });
    return true;
  } catch (error: any) {
    if (error.response?.status === 409) {
      return false;
    }
    console.error("별명 변경 실패:", error);
    return false;
  }
};
