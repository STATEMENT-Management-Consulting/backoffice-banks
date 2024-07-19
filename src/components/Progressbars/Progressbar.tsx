interface IProgressbar {
  percentage: number;
  className?: string;
  label?: string;
}

export function Progressbar({ percentage, className, label }: IProgressbar) {
  return (
    <div className={`stack gap-y-[0.31rem] ${className}`}>
      {label && (
        <div className="flex justify-between items-center gap-x-2">
          <p>{label}</p>
          <p className="font-bold">{percentage % 100}%</p>
        </div>
      )}
      <div className="w-full h-[0.125rem] bg-primary bg-opacity-20 rounded-full overflow-hidden">
        <div
          className={`h-full bg-primary`}
          style={{ width: `${percentage % 100}%` }}
        />
      </div>
    </div>
  );
}
