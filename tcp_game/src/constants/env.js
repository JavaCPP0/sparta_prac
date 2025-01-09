// 중앙 집중식 관리
import dotenv from 'dotenv'; // 환경 변수를 관리하기 위해 dotenv 모듈 임포트

dotenv.config(); // .env 파일의 환경 변수 로드

// 환경 변수 설정, 없을 경우 기본값 사용
export const PORT = process.env.PORT || 3000; // 포트 설정
export const HOST = process.env.HOST || 'localhost'; // 호스트 설정
export const CLIENT_VERSION = process.env.CLIENT_VERSION || '1.0.0'; // 클라이언트 버전 설정

export const DB1_NAME = process.env.DB1_NAME || 'database1';
export const DB1_USER = process.env.DB1_USER || 'user1';
export const DB1_PASSWORD = process.env.DB1_PASSWORD || 'password1';
export const DB1_HOST = process.env.DB1_HOST || 'localhost';
export const DB1_PORT = process.env.DB1_PORT || 3306;

export const DB2_NAME = process.env.DB2_NAME || 'database2';
export const DB2_USER = process.env.DB2_USER || 'user2';
export const DB2_PASSWORD = process.env.DB2_PASSWORD || 'password2';
export const DB2_HOST = process.env.DB2_HOST || 'localhost';
export const DB2_PORT = process.env.DB2_PORT || 3306;