import { useEffect, useState } from "react";
import { BaseInput } from "../BaseInput/BaseInput";
import isValid from "date-fns/isValid";
import { useRef } from "react";
import { isEmpty } from "lodash";
import { cn } from "@/styles/utils";
import { formatDate } from "@/utilities/dates/dateBaseUtils";
import { useComponentsDictionary } from "locales/t/components";
import { useFormatDate } from "@/utilities/dates/useFormatDate";

type TCustomDateInput = {
  label?: string;
  changeDay?: (value: string) => void;
  changeMonth?: (value: string) => void;
  changeYear?: (value: string) => void;
  onCHangeDate?: (value: Date | undefined) => void;
  error?: string;
  enableError?: boolean;
  required?: boolean;
  hideDay?: boolean;
  value?: Date;
  classNameInput?: string;
  disabled?: boolean;
  wrapperClassName?: string;
  min?: Date;
  max?: Date;
  minYear?: number;
};
export function CustomDateInput({
  label,
  error,
  disabled,
  wrapperClassName,
  required,
  onCHangeDate,
  classNameInput,
  value: v,
  min,
  max,
  minYear = 1000,
}: TCustomDateInput) {
  const isDateValid = v && isValid(v);
  const { formatDate: format } = useFormatDate();
  const [day, setDay] = useState<string>(() =>
    isDateValid ? v?.getDate().toString() : ""
  );

  const [month, setMonth] = useState<string>(() =>
    isDateValid ? format({ date: v, format: "MM", erroText: "" }) : ""
  );
  const [year, setYear] = useState<string>(
    isDateValid ? format({ date: v, format: "yyy", erroText: "" }) : ""
  );
  const [alert, setAlert] = useState<string | undefined>(undefined);
  const translate = useComponentsDictionary();

  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const maxDate = new Date(max as Date);
  const minDate = new Date(min as Date);

  const verifyDateValid = () => {
    const date = new Date(
      `${monthRef?.current?.value}/${dayRef?.current?.value}/${yearRef?.current?.value}`
    );

    if (isValid(date)) {
      setAlert(undefined);
    }
  };

  const setFocus = () => {
    if (dayRef.current && monthRef.current && yearRef.current) {
      if (
        isEmpty(dayRef.current.value) &&
        !isValid(new Date(`${month}/${day}/${year}`))
      ) {
        dayRef.current.focus();
      } else if (
        isEmpty(monthRef.current.value) &&
        !isValid(new Date(`${month}/${day}/${year}`))
      ) {
        monthRef.current.focus();
      } else if (isEmpty(monthRef.current.value)) {
        yearRef.current.focus();
      } else {
        return;
      }
    }
  };

  const handleChangeDay = (v: string) => {
    const dayValue = v.replace(/\D/g, "");
    setDay(dayValue.slice(0, 2));

    if (v.length === 2 && monthRef.current) {
      monthRef.current.focus();
    }

    const date = `${month}/${Number(dayValue) + 1}/${year}`;
    onCHangeDate?.(new Date(date));

    if (isValid(new Date(date)) && year && month) {
      onCHangeDate?.(new Date(date));
      setAlert(undefined);
    } else {
      if (year && month) setAlert(translate("date-input.errors.invalid-date"));
      onCHangeDate?.(undefined);
    }
  };

  const handleChangeMonth = (v: string) => {
    const monthValue = v.replace(/\D/g, "");
    setMonth(monthValue.slice(0, 2));

    if (v != "1" && v != "0" && yearRef.current) {
      yearRef.current.focus();
    } else if (v.length === 2 && yearRef.current) {
      yearRef.current.focus();
    }

    if (v.length === 0 && dayRef.current) {
      dayRef.current.focus();
    }

    if (Number(v) == 2 && Number(day) > 29) {
      setAlert(translate("date-input.errors.february-date-invalid"));
    }

    const date = `${v}/${day}/${year}`;
    onCHangeDate?.(new Date(date));

    if (isValid(new Date(date)) && year && day) {
      onCHangeDate?.(new Date(date));
    } else if (year && day) {
      setAlert(translate("date-input.errors.invalid-date"));
    }
  };

  const handleChangeYear = (v: string) => {
    const yearValue = v.slice(0, 4).replace(/\D/g, "");
    setYear(yearValue);

    if (v.length === 0 && monthRef.current) {
      monthRef.current.focus();
    }

    const date = `${month}/${day}/${yearValue}`;
    onCHangeDate?.(new Date(date));

    if (isValid(new Date(date)) && day && month) {
      setAlert(undefined);
      onCHangeDate?.(new Date(date));

      if (max && new Date(date) > maxDate) {
        setAlert(
          translate("date-input.errors.max-invalid", {
            date: formatDate(maxDate),
          })
        );
      } else if (min && new Date(date) < minDate) {
        setAlert(
          translate("date-input.errors.min-invalid", {
            date: formatDate(minDate),
          })
        );
      } else {
        setAlert(undefined);
      }
    } else if (day && month) {
      setAlert(translate("date-input.errors.invalid-date"));
    }
  };

  useEffect(() => {
    if (dayRef?.current && monthRef?.current && yearRef?.current) {
      if (!day?.length && !month?.length && !year?.length) {
        verifyDateValid();
      } else if (day?.length === 2 && monthRef?.current?.value?.length < 1) {
        verifyDateValid();
        monthRef?.current?.focus();
      } else if (monthRef?.current?.value?.length === 2 && year?.length != 4) {
        verifyDateValid();

        yearRef?.current?.focus();
      } else {
        verifyDateValid();
      }
    }
  }, [day, month, year]);

  useEffect(() => {
    const div = document.getElementById("main-div");

    if (div) {
      div.addEventListener("keydown", (event) => {
        if (event.key === "Backspace") {
          if (dayRef.current && monthRef.current && yearRef.current) {
            if (document.activeElement == yearRef.current) {
              if (isEmpty(yearRef.current.value)) {
                monthRef.current.focus();
              }
            }
            if (document.activeElement == monthRef.current) {
              if (isEmpty(monthRef.current.value)) {
                dayRef.current.focus();
              }
            }
          }
        }
      });
    }
  }, []);

  return (
    <div className={`w-full stack gap-y-[0.68rem] ${wrapperClassName}`}>
      {label && (
        <label
          className={cn(
            `!text-body-md md:!text-body-lg font-medium text-dark-blue-shade1 self-start relative`,
            disabled && "opacity-[.3]"
          )}
          htmlFor={disabled ? undefined : label}
        >
          {label}
          {required && (
            <span className="text-red-shade6 font-bold text-body-xl absolute -right-3">
              *
            </span>
          )}
        </label>
      )}
      <div
        id="main-div"
        onClick={setFocus}
        data-error={!!error || !!alert}
        className={`!max-h-[54px] group/base-input items-center text-gray-shade7 border w-full flex-1 !py-0 border-gray-shade11 focus-within:border-primary grid grid-cols-5 px-[1.25rem] sm:py-3 lg:py-[0.87rem] rounded-[0.625rem] [&:has(input:auto-fill)]:bg-blue-shade6  ${classNameInput} ${
          (error || alert) && "border-red-shade6 outline-red-shade6"
        }`}
      >
        <BaseInput
          ref={dayRef}
          type="text"
          value={day ?? " "}
          disabled={disabled}
          className="border-none !px-0 w-auto flex-1"
          placeholder="DD"
          maxLength={2}
          onChange={handleChangeDay}
        />
        <span>/</span>
        <BaseInput
          ref={monthRef}
          type="text"
          disabled={disabled}
          className="border-none !px-0 w-auto flex-1"
          placeholder="MM"
          value={month}
          maxLength={2}
          onChange={handleChangeMonth}
        />
        <span> /</span>
        <BaseInput
          ref={yearRef}
          type="text"
          value={year}
          disabled={disabled}
          className="border-none min-w-14 -ml-3 !px-0 w-auto"
          placeholder="YYYY"
          min={minYear}
          maxLength={4}
          onChange={handleChangeYear}
        />
      </div>

      {(alert || error) && (
        <p className="text-red-shade6 text-body-sm mt-2">{error || alert}</p>
      )}
    </div>
  );
}
