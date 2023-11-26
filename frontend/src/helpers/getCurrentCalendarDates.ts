export const getCurrentCalendarDates = (year: number, monthIndex: number) => {
  const firstDayOfCurrentMonth = new Date(year, monthIndex).getDay();
  const lastDayOfCurrentMonth = new Date(year, monthIndex + 1, 0).getDay();

  const result: Date[][] = [];

  let week: Date[] = [];

  if (firstDayOfCurrentMonth !== 1) {
    for (let i = 0; i < firstDayOfCurrentMonth - 1; i++) {
      const date = new Date(year, monthIndex, -i);
      week.splice(0, 0, date);
    }
  }

  let initialDay = 1;

  while (new Date(year, monthIndex, initialDay).getMonth() === Number(monthIndex)) {
    const date = new Date(year, monthIndex, initialDay++);
    week.push(date);

    if (week.length === 7) {
      result.push(week);
      week = [];
    }
  }

  if (lastDayOfCurrentMonth !== 0) {
    for (let i = 0; i < 6 - lastDayOfCurrentMonth + 1; i++) {
      const date = new Date(year, monthIndex + 1, i + 1);
      week.push(date);

      if (week.length === 7) {
        result.push(week);
        week = [];
      }      
    }
  }

  if (week.length) {
    result.push(week);
  }

  return result;
}