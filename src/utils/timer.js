export const EASY_MAX_NUMBER = 15;
export const HARD_MAX_NUMBER = 10;

export const getMaxTime = (difficulty) => {
  return difficulty === 'hard' ? HARD_MAX_NUMBER : EASY_MAX_NUMBER;
}

export const formatTime = (time) => {
  if (time < 10) {
    return '00 : 0' + time;
  } else {
    return '00 : ' + time;
  }
}