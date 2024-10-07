export function isSecondDayOrLater(startTime, endTime) {
  // 将时间转换为北京时间（假设输入的是 UTC 时间）
  const toBeijingTime = (date) => new Date(date.getTime() + 8 * 60 * 60 * 1000);

  const startBeijingTime = toBeijingTime(startTime);
  const endBeijingTime = toBeijingTime(endTime);

  // 获取北京时间的日期部分
  const startBeijingDate = new Date(
    startBeijingTime.getFullYear(),
    startBeijingTime.getMonth(),
    startBeijingTime.getDate(),
  );

  const endBeijingDate = new Date(
    endBeijingTime.getFullYear(),
    endBeijingTime.getMonth(),
    endBeijingTime.getDate(),
  );

  // 计算日期差异
  const timeDifference = endBeijingDate.getTime() - startBeijingDate.getTime();
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

  // 判断第二个时间点是否是第一个时间点的第二天或更晚
  return daysDifference >= 1;
}
