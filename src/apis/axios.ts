import axios from "axios";

// Axios 인스턴스 생성
const instance = axios.create({
  baseURL: "/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Axios 인스턴스를 모듈로 내보내어 다른 파일에서 사용
export default instance;
