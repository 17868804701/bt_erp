/**
 * Created by qismsom on 2018/7/31.
 */

export function formatDate(now) {
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
};

export function getFirstDay(date) {
  let year = date.getFullYear();
  let month = date.getMonth()+1;
  if (month < 10) {
    month = "0" + month;
  }
  let firstDay = year + "-" + month + "-" + "01";
  console.log('第一天');
  console.log(firstDay);
  return firstDay;
}

export function getLastDay(date) {
  let year = date.getFullYear();
  let month = date.getMonth()+1;
  if (month < 10) {
    month = "0" + month;
  }
  let myDate = new Date(year, month, 0);
  let lastDay = year + "-" + month + "-" + myDate.getDate();
  console.log('最后一天');
  console.log(lastDay);
  return lastDay;
}
