import { TWeekDay, useWeekDays } from "@/utilities/dates/useWeekDays";
import { useState } from "react";
import { SelectInput } from "../SelectInput/SelectInput";
import { Badge } from "@/components/Badge/Badge";
import { useComponentsDictionary } from "locales/t/components";
import { CheckboxInput } from "@/components/Checkbox/Checkbox";

type TDay =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

interface IDaysInput {
  label?: string;
  required?: boolean;
  placeholder?: string;
  days?: TDay[];
  short?: boolean;
  error?: string;
  onSelectDays?: (days: IDaysInput["days"]) => void;
  onSelectDay?: (day: TDay) => void;
  disabled?: boolean;
}

export function DaysInput({
  days = [],
  short,
  label,
  required,
  error,
  onSelectDay,
  onSelectDays,
  placeholder,
  disabled,
}: IDaysInput) {
  const weekDays = useWeekDays(short);
  const [useWorkDays, setUseWorkDays] = useState<boolean>(false);
  const componentsDictionary = useComponentsDictionary();

  const [selectedDays, setSelectedDays] = useState<TWeekDay[]>(
    (weekDays?.filter((day: any) => days?.includes(day.id)) as TWeekDay[]) ?? []
  );

  const weekDaysOptions = weekDays.filter(
    (day) => !selectedDays?.find((item) => item?.id == day?.id)
  );

  const removeDay = (day: string) => {
    onSelectDays?.(days?.filter((thisDay) => day != thisDay));
    setSelectedDays((selectedDays) =>
      selectedDays?.filter((thisDay) => thisDay?.id !== day)
    );
  };

  const handleChangeDay = (day: TWeekDay) => {
    const newDays = [...selectedDays, day].sort((a, b) => a.index - b.index);
    setSelectedDays(newDays);
    onSelectDays?.(newDays?.map((day) => day.id));
  };

  const onUseWorkDays = (value: boolean) => {
    setUseWorkDays(value);
    if (value) {
      onSelectDays?.(["monday", "tuesday", "wednesday", "thursday", "friday"]);
      setSelectedDays(weekDays?.splice(0, 5) as TWeekDay[]);
    } else {
      setSelectedDays((selectedDays) =>
        selectedDays?.filter(
          (thisDay) =>
            !["monday", "tuesday", "wednesday", "thursday", "friday"].includes(
              thisDay?.id
            )
        )
      );
      onSelectDays?.(
        days?.filter((day) =>
          ["monday", "tuesday", "wednesday", "thursday", "friday"].includes(day)
        )
      );
    }
  };

  return (
    <div className="stack gap-y-4">
      <div className="stack gap-y-2">
        <SelectInput
          label={label}
          required={required}
          options={weekDaysOptions}
          error={error}
          disabled={disabled}
          wrapperClassName="[&_*]:!capitalize"
          onChange={onSelectDay as any}
          onChangeOption={(option) => handleChangeDay(option as any)}
          placeholder={placeholder}
        />
        {!disabled && (
          <CheckboxInput
            value={useWorkDays}
            onChange={onUseWorkDays}
            label={componentsDictionary(
              useWorkDays
                ? "DaysInput.WorkDays.remove-work-days"
                : "DaysInput.WorkDays.label"
            )}
          />
        )}
      </div>
      {selectedDays?.length > 0 && (
        <div className="w-full flex flex-wrap items-center gap-4 mt-4">
          {selectedDays
            .sort((a, b) => a.index - b.index)
            .map((day) => (
              <Badge
                key={day.id}
                label={day.name}
                className="capitalize"
                value={day.id}
                onRemove={removeDay}
              />
            ))}
        </div>
      )}
    </div>
  );
}
