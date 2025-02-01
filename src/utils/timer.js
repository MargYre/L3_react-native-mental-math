export const MAX_TIME = 15;

export const formatTime = (time) => {
  if (time < 10) {
    return '00 : 0' + time;
  } else {
    return '00 : ' + time;
  }
}