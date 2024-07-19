type TOption = {
  index: number;
  value: number;
};

interface Props {
  symbol?: any;
  value: number;
  color: string;
  options: TOption[];
  handleChangeValue: (value: number) => void;
}

export function BarProgressValues({
  value,
  color,
  symbol,
  options,
  handleChangeValue,
}: Props) {
  return (
    <div className=" flex items-center justify-between w-full rounded-[2rem]">
      <div className="flex transition-all justify-between h-[0.79775rem] items-center w-full ">
        {options.map((option, index) => (
          <div
            key={index}
            style={{
              color: value == option.index ? color : "",
            }}
            onClick={() => handleChangeValue(index)}
            className={`w-[3.5rem] h-[3.5rem] rounded-full text-center transition-all relative flex items-center justify-center p-[0px] cursor-pointer bg-opacity-30 z-40 text-body-md font-medium text-gray-shade4 ${
              value == option.index &&
              `!text-[${color}] !text-[1rem] !font-bold !justify-center -top-[43px]`
            }  ${index == 0 && "!justify-start"} ${
              index == options.length - 1 && "!justify-end"
            }`}
          >
            {option.value}
            {symbol ?? ""}
          </div>
        ))}
      </div>
    </div>
  );
}
