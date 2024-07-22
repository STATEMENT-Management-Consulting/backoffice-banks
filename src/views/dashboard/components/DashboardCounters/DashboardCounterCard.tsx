type DashboardCounterCardProps = {
  icon: JSX.Element;
  label: string;
  value: number;
  active?: boolean;
  setActive?: () => void;
};

export function DashboardCounterCard({
  icon,
  label,
  value,
  active,
  setActive,
}: DashboardCounterCardProps) {
  return (
    <div
      onClick={setActive}
      className={`w-[17.5rem] cursor-pointer transition-all hover:border hover:border-primary hover:border-opacity-50 h-[13.625rem] shadow-lg shadow-[#26235110] rounded-xl stack items-start gap-y-8 p-6 ${
        active ? "bg-primary" : "bg-white"
      }`}
    >
      <div
        className={`flex-center transition-all  p-2 rounded-md [&>svg_*]:stroke-primary bg-primary bg-opacity-10 ${
          active && "[&>svg_*]:stroke-white"
        }`}
      >
        {icon}
      </div>

      <div className="stack gap-y-2">
        <h2
          className={`font-bold transition-all  text-[2.5rem] ${
            active && "text-white"
          } text-dark-black`}
        >
          {value}
        </h2>

        <h6
          className={`font-medium transition-all  text-body-lg uppercase ${
            active && "text-white"
          } text-gray-shade7
        `}
        >
          {label}
        </h6>
      </div>
    </div>
  );
}
