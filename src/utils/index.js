// import duration from 'dayjs/plugin/duration';
import _ from "lodash";

// const formatSec = (sec) => {
//   return dayjs.duration(sec, 'seconds').format('HH:mm:ss');
// };

const addZero = (num) => {
  return ("0" + num).slice(-2);
};

const isEmpty = (v) => {
  return !_.isNumber(v) && _.isEmpty(v);
};

const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

const getUrl = (img) => {
  return new URL(`/src/assets/imgs/${img}`, import.meta.url).href;
};

export { isEmpty, addZero, isMobile, getUrl };
