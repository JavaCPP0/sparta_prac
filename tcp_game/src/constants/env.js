// 중앙 집중식 관리
import dotenv from 'dotenv'; // 환경 변수를 관리하기 위해 dotenv 모듈 임포트

dotenv.config(); // .env 파일의 환경 변수 로드

// 환경 변수 설정, 없을 경우 기본값 사용
export const PORT = process.env.PORT || 3000; // 포트 설정
export const HOST = process.env.HOST || 'localhost'; // 호스트 설정
export const CLIENT_VERSION = process.env.CLIENT_VERSION || '1.0.0'; // 클라이언트 버전 설정