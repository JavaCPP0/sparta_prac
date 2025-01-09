import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pools from '../database.js';

// import.meta.url은 현재 모듈의 URL을 나타내는 문자열
// fileURLToPath는 URL 문자열을 파일 시스템의 경로로 변환

// 현재 파일의 절대 경로. 이 경로는 파일의 이름을 포함한 전체 경로
const __filename = fileURLToPath(import.meta.url);

// path.dirname() 함수는 파일 경로에서 디렉토리 경로만 추출 (파일 이름을 제외한 디렉토리의 전체 경로)
const __dirname = path.dirname(__filename);

const executeSqlFile = async (pool, filepath) => {
  const sql = fs.readFileSync(filepath, 'utf8');
  const queries = sql
    .split(';')
    .map((query) => query.trim())
    .filter((query) => query.length > 0);
  for(const query of queries){
    await pool.query(query);
  }
  
};

const createSchemas = async () => {
    const sqlDir = path.join(__dirname, '../sql');
    try{
        await executeSqlFile(pools.USER_DB,path.join(sqlDir,'user_db.sql'));
    }catch(e){
        console.error(`데이터베이스 테이블 생성 중 오류가 발생했습니다: ${e}`);
    }
};


createSchemas().then(()=>{
    console.log('마이그레이션이 완료되었습니다.');
    process.exit(0);
}).catch((e)=>{
    console.log(e);
    process.exit(1);
})