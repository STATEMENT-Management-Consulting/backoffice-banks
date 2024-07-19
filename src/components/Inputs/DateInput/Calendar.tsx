import React, { useEffect, useState } from "react";
import {
  addDays,
  startOfWeek,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  isSameDay,
} from "date-fns";
import pt from "date-fns/locale/pt-BR";
import styles from "./Calendar.module.css";
import { Button } from "@/components/Button/Button";
import { ArrowLeft } from "@/assets/feather-icons/ArrowLeft";
import { ArrowRight } from "@/assets/feather-icons/ArrowRight";
import { calculateDistanceBtwDatesUnite } from "@/utilities/dates/calculateDistanceBtwDatesUnite";
import {
  capitalize,
  formatDateString,
  formatIntervalString,
} from "@/utilities/dates/dateBaseUtils";
import { useComponentsDictionary } from "locales/t/components";
import { useWeekDays } from "@/utilities/dates/useWeekDays";

interface ICalendar {
  show: boolean;
  save: () => void;
  cancel: () => void;
  interval: (value: any) => void;
}

export function Calendar({ show, save, cancel, interval }: ICalendar) {
  const componentsDictionary = useComponentsDictionary();
  const daysInMonth = [];
  const today = new Date();
  const week = useWeekDays();
  const [slideDirection, setSlideDirection] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(today));
  const [selectedStartDate, setSelectedStartDate] = useState<Date>(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState<Date>(() => {
    const dataAtual = new Date();
    dataAtual.setDate(dataAtual.getDate() + 5);
    return dataAtual;
  });

  const lastDay = endOfMonth(currentMonth);
  const firstDay = startOfWeek(currentMonth, { weekStartsOn: 1 });
  const endOfLastWeek = endOfWeek(lastDay, { weekStartsOn: 0 });

  const handlePrevMonth = () => {
    setSlideDirection(styles.SlideInLeft);
    setTimeout(() => {
      setSlideDirection("");
    }, 501);
    setCurrentMonth((prevMonth) => startOfMonth(addDays(prevMonth, -1)));
  };

  const handleNextMonth = () => {
    setSlideDirection(styles.SlideInRight);
    setTimeout(() => {
      setSlideDirection("");
    }, 501);
    setCurrentMonth((prevMonth) => startOfMonth(addDays(prevMonth, 32)));
  };

  const handleDayClick = (date: Date) => {
    const distanceFirst = calculateDistanceBtwDatesUnite({
      firstDate: date,
      secundDate: selectedStartDate,
    });

    const distanceEnd = calculateDistanceBtwDatesUnite({
      firstDate: date,
      secundDate: selectedEndDate,
    });

    if (distanceFirst < distanceEnd) {
      setSelectedStartDate(date);
    } else {
      setSelectedEndDate(date);
    }
  };

  const getIntervalText = () => {
    return formatIntervalString(selectedStartDate, selectedEndDate);
  };

  for (let day = firstDay; day <= endOfLastWeek; day = addDays(day, 1)) {
    const isSelected =
      (selectedStartDate &&
        isSameDay(day, selectedStartDate) &&
        !selectedEndDate) ||
      (selectedEndDate && isSameDay(day, selectedEndDate)) ||
      (selectedStartDate &&
        selectedEndDate &&
        day > selectedStartDate &&
        day < selectedEndDate);

    const isOutOfMonth = !isSameMonth(day, currentMonth);
    daysInMonth.push(
      <div
        className={`h-[34px] flex items-center justify-center ${
          isSelected &&
          formatDateString(selectedEndDate) !== formatDateString(day)
            ? "bg-[#D8E3E8]"
            : isOutOfMonth
            ? "text-gray-shade7 "
            : ""
        }  
        ${
          formatDateString(selectedStartDate) === formatDateString(day) &&
          "text-white bg-[#D8E3E8] rounded-l-[10px]"
        } 
        ${
          formatDateString(selectedEndDate) === formatDateString(day) &&
          "text-white bg-[#D8E3E8] rounded-r-[10px]"
        }
        ${
          formatDateString(endOfLastWeek) === formatDateString(day) &&
          "rounded-r-[10px]"
        }
        ${day.toString().split(" ")[0] === "Mon" && "rounded-l-[10px]"}
        ${day.toString().split(" ")[0] === "Sun" && "rounded-r-[10px]"}
        `}
      >
        <div
          key={day.toString()}
          className={`flex px-5 items-center justify-center text-[14px] text-black mt-[10px] mb-[10px] cursor-pointer ${
            isSelected &&
            formatDateString(selectedEndDate) !== formatDateString(day)
              ? " text-blue-shade1"
              : isOutOfMonth
              ? "text-gray-shade7 "
              : ""
          } 
        ${
          formatDateString(selectedStartDate) === formatDateString(day) &&
          "text-white bg-blue-shade1 rounded-[10px] h-full w-full "
        } 
        ${
          formatDateString(selectedEndDate) === formatDateString(day) &&
          "text-white bg-blue-shade1 rounded-[10px] h-full w-full "
        } 
        `}
          onClick={() => handleDayClick(day)}
        >
          {format(day, "d")}
        </div>
      </div>
    );
  }

  useEffect(() => {
    interval(getIntervalText());
  });

  return (
    show && (
      <div className={`${styles.SlideTop} mt-2 top-[100%] right-0`}>
        <div
          className={`calendar bg-white rounded-2xl p-[24px] stack overflow-hidden w-[700px] shadow-calendar`}
        >
          <span className="text-[20px] font-semibold border-b-[1px] border-gray-shade10 pb-[16px] mb-[16px]">
            {componentsDictionary("Calendar.set-date")}
          </span>
          <div className="flex justify-between px-[12px] py-[8px] items-center h-[24px] w-full mb-[10px]">
            <div
              onClick={handlePrevMonth}
              className="w-[24px] flex justify-start cursor-pointer"
            >
              {ArrowLeft}
            </div>
            <span className="font-semibold text-[16px]">
              {capitalize(format(currentMonth, "MMMM yyyy", { locale: pt }))}
            </span>
            <div
              onClick={handleNextMonth}
              className="w-[24px] flex justify-end cursor-pointer"
            >
              {ArrowRight}
            </div>
          </div>
          <div className={`flex w-full justify-center ${slideDirection}`}>
            <div className={`grid grid-cols-7 gap-y-2`}>
              {week.map((item) => (
                <div
                  key={item?.name}
                  className="h-[34px] text-center text-gray-shade7 flex items-center justify-center text-[14px] rounded-[10px] mt-[10px] bmb-[10px] w-[34px]"
                >
                  {item?.name}
                </div>
              ))}
              {daysInMonth}
            </div>
          </div>
          <div className="flex self-end mt-[20px]">
            <Button
              type="button"
              onClick={cancel}
              className={
                "text-blue-shade1 bg-white border-blue-shade1 border-[1px] px-[24px] py-[21px] w-[100px] h-[38px] mr-[20px] text-[14px]"
              }
              label={"Cancelar"}
            />
            <Button
              type="button"
              onClick={save}
              className={
                "text-white border-blue-shade1 border-[1px]  bg-blue-shade1 px-[24px] py-[21px] w-[100px] h-[38px] text-[14px]"
              }
              label={"Salvar"}
            />
          </div>
        </div>
      </div>
    )
  );
}
