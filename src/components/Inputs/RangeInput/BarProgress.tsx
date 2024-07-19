interface Props {
  max: number;
  value: number;
  color: string;
  options: TOption[];
  currentIndex: number;
  handleChangeValue: (value: number) => void;
}

type TOption = {
  index: number;
  value: number;
};

export function BarProgress({
  max,
  value,
  color,
  options,
  currentIndex,
  handleChangeValue,
}: Props) {
  return (
    <div
      style={{ top: "6.5px" }}
      className="absolute flex items-center justify-between bg-gray-shade18 w-full rounded-[2rem]"
    >
      <div className="flex justify-between h-[0.5rem] items-center w-full ">
        {options.map((_, index) =>
          currentIndex == index ? (
            <div key={index} className="relative z-30 bg-white rounded-full">
              <div
                style={{
                  borderColor: color,
                  opacity: `${value + 30}%`,
                }}
                className={`relative z-30 flex items-center justify-center w-[3.5rem] h-[3.5rem] border-[0.3rem] bg-white rounded-full`}
              />
            </div>
          ) : (
            <div
              key={index}
              onClick={() => handleChangeValue(index)}
              className={`relative cursor-pointer z-10 flex items-center justify-center w-[3.5rem] h-[3.5rem] rounded-full  ${
                index == 0 && "!justify-start"
              } ${index == max && "!justify-end"}`}
            >
              <div
                className={
                  "w-[8px] h-[8px] cursor-pointer z-10 bg-gray-shade19 bg-opacity-30 rounded-full"
                }
              />
            </div>
          )
        )}
      </div>

      <div
        style={{
          top: "0px",
          width: `${value}%`,
          opacity: `${value}%`,
          backgroundColor: color,
        }}
        className={`absolute transition-colors z-20 bg-opacity-50  top-0 h-[0.5rem] rounded-[2rem]`}
      ></div>
    </div>
  );
}
