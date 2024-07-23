import { useFormatDate } from "./useFormatDate";

export type TWeekDay = {
  index: number;
  id:
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday";
  name: string;
  status: boolean;
};

export function useWeekDays(
  short?: boolean,
  days?: any[],
  hours?: number
) {
  const { formatDate } = useFormatDate();
  const format = short ? "EEE" : "EEEE";

  const formatted = [
    {
      index: 1,
      id: "monday",
      name: formatDate({
        format,
        date: new Date("11-13-2023"),
      }),
    },
    {
      index: 2,
      id: "tuesday",
      name: formatDate({
        format,
        date: new Date("11-14-2023"),
      }),
    },
    {
      index: 3,
      id: "wednesday",
      name: formatDate({
        format,
        date: new Date("11-15-2023"),
      }),
    },
    {
      index: 4,
      id: "thursday",
      name: formatDate({
        format,
        date: new Date("11-16-2023"),
      }),
    },
    {
      index: 5,
      id: "friday",
      name: formatDate({
        format,
        date: new Date("11-17-2023"),
      }),
    },
    {
      index: 6,
      id: "saturday",
      name: formatDate({
        format,
        date: new Date("11-18-2023"),
      }),
    },
    {
      index: 7,
      id: "sunday",
      name: formatDate({
        format,
        date: new Date("11-19-2023"),
      }),
    },
  ];

  if (days) {
    const weekDays = days.map((item: any) => {
      const data = formatted?.find((d) => d?.id == item?.day);
      return {
        ...data,
        time: hours,
        status: item?.status,
      };
    });

    return weekDays?.filter(
      (day) => day != undefined && day?.status != false
    ) as TWeekDay[];
  }

  return formatted;
}
