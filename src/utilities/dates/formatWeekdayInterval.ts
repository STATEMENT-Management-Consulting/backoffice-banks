export function formatWeekdayInterval(weekdays: string[]): string {
  const sortedWeekdays = weekdays.sort(
    (a, b) => getDayNumber(a) - getDayNumber(b)
  );

  function getDayNumber(weekday: string): number {
    const weekdaysOrder: string[] = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    return weekdaysOrder.indexOf(weekday.toLowerCase());
  }

  const intervals: string[][] = [];
  let currentInterval: string[] = [sortedWeekdays[0]];

  for (let i = 1; i < sortedWeekdays.length; i++) {
    if (
      getDayNumber(sortedWeekdays[i]) ===
      getDayNumber(currentInterval[currentInterval.length - 1]) + 1
    ) {
      currentInterval.push(sortedWeekdays[i]);
    } else {
      intervals.push(currentInterval);
      currentInterval = [sortedWeekdays[i]];
    }
  }

  intervals.push(currentInterval);

  const formattedIntervals: string[] = intervals.map((interval) => {
    if (interval.length > 1) {
      // Replace the last hyphen with an ampersand
      const formattedString = interval.join("-");
      const lastIndex = formattedString.lastIndexOf("-");
      return (
        formattedString.substring(0, lastIndex) +
        "," +
        formattedString.substring(lastIndex + 1)
      );
    } else {
      return interval[0];
    }
  });

  return formattedIntervals.join(", ");
}
