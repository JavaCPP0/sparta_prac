// 스테이지 정보를 저장할 객체
const stages = {};

/**
 * 새로운 스테이지를 생성하는 함수
 * @param {string} uuid - 사용자 식별자
 */
export const createStage = (uuid) => {
  stages[uuid] = []; // 초기 스테이지 배열 생성
};

/**
 * 특정 사용자의 스테이지 정보를 조회하는 함수
 * @param {string} uuid - 사용자 식별자
 * @returns {Array} - 스테이지 정보 배열
 */
export const getStage = (uuid) => {
  return stages[uuid];
};

/**
 * 스테이지에 새로운 정보를 추가하는 함수
 * @param {string} uuid - 사용자 식별자
 * @param {string} id - 스테이지 ID
 * @param {number} timestamp - 타임스탬프
 * @returns {number} - 추가된 후의 배열 길이
 */
export const setStage = (uuid, id, timestamp) => {
  return stages[uuid].push({ id, timestamp });
};

/**
 * 특정 사용자의 스테이지 정보를 초기화하는 함수
 * @param {string} uuid - 사용자 식별자
 */
export const clearStage = (uuid) => {
  stages[uuid] = [];
};
