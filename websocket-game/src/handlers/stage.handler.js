import { getGameAssets } from '../init/assets.js';
import { getStage, setStage } from '../models/stage.model.js';

export const moveStageHandler = (userId, payload) => {
  //유저의 현재 스테이지 정보
  let currentStages = getStage(userId);
  if (!currentStages.length) {
    return { status: 'fail', message: 'No stages found for user' };
  }

  //오름차순 정렬로 가장 큰 스테이지 ID를 확인
  currentStages.sort((a, b) => a.id - b.id);
  const currentStage = currentStages[currentStages.length - 1];

  //클라이언트 vs 서버 비교
  if (currentStage.id !== payload.currentStage) {
    return { status: 'fail', message: 'Current Stage mismatch' };
  }

  //점수 검증
  const serverTime = Date.now(); //현재 타임스탬프
  const elapsedTime = (serverTime - currentStage.timeStamp) / 1000;

  // 1스테이지 ->2스테이지 넘어가는 검증
  //5=>임의로 정한 오차범위
  if (elapsedTime < 100 || elapsedTime > 105) {
    return {status:'fail',message:'Invalid elapsed time'};
  }

  // 게임 에셋에서 스테이지 정보를 가져옴
  const { stages } = getGameAssets();
  // 클라이언트가 요청한 targetStage가 유효한 스테이지인지 검증
  // some() 메서드를 사용하여 stages.data 배열에서 일치하는 id가 있는지 확인
  // 참고: come()은 오타로 보이며, some()이 올바른 메서드명입니다
  if (!stages.data.some((stage) => stage.id === payload.targetStage)) {
    return { status: 'fail', message: 'Target stage not found' };
  }

  setStage(userId, payload.targetStage,serverTime);

  return { status: 'success' };
};

export default moveStageHandler;
