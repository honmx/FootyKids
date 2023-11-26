export const getScheduleIndex = (monthIndex: number, date: Date) => {
  if (date.getMonth() < monthIndex) return 0;
  if (date.getMonth() === monthIndex) return 1;
  return 2;
}