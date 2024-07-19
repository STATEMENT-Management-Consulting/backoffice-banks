import React, { useEffect, useState } from "react";
import styles from "./progress.module.css";
import { BarProgress } from "./BarProgress";
import { BarProgressValues } from "./BarProgressValues";

interface IProgressPlan {
  symbol?: any;
  value: number;
  color?: string;
  options: TOption[];
  setValue: (value: number) => void;
}

type TOption = {
  index: number;
  value: number;
};

export function RangeInput({
  symbol,
  options,
  value: currentValue,
  color = "#0B89CE",
  setValue: setValueProp,
}: IProgressPlan) {
  const max = options.length - 1;
  const [value, setValue] = useState<number>(currentValue ?? 0);

  const handleChangeValue = (value: number) => {
    setValue(value);
    setValueProp(value);
  };

  return (
    <div className="text-center cursor-pointer relative w-full">
      <div className="relative w-full mt-[4rem] h-[3rem]">
        <BarProgress
          max={max}
          color={color}
          options={options}
          currentIndex={value}
          value={value * (100 / max)}
          handleChangeValue={handleChangeValue}
        />
        <div className="relative z-50">
          <input
            min={0}
            max={max}
            type="range"
            value={value}
            id="customRange"
            onChange={(event) => handleChangeValue(event.target.value as any)}
            className={`w-full outline-none h-2 bg-transparent appearance-none transition duration-200 rounded ${styles.RangeSlider} `}
          />
        </div>
      </div>
      <BarProgressValues
        value={value}
        color={color}
        symbol={symbol}
        options={options}
        handleChangeValue={handleChangeValue}
      />
    </div>
  );
}
