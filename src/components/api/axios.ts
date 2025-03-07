import axios from "axios";

const serverUrl = "http://15.164.98.149:8080/v1"; // 여기는 server 주소 삽입하면 됨.

const instance = axios.create({
  baseURL: serverUrl, // api.get("/members") 처럼 사용하면 실제 주소는 http://15.164.98.149:8080/v1/members 로 사용 가능능
  headers: {
    "Content-Type": "application/json",
  },

  timeout: 15000,
});

instance.interceptors.request.use(
  (config) => {
    // 요청을 보내기 전에 실행할 함수
    const token = sessionStorage.getItem("accessToken");

    // 토큰이 존재하면, 모든 요청의 헤더에 Authorization을 추가.
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 요청이 실패했을 때 실행할 함수
    return Promise.reject(error);
  }
);

export default instance;
