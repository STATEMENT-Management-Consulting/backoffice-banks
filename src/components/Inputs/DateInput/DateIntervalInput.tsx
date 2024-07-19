import { DateIntervalTrigger } from "./DateIntervalTrigger";

interface IDateIntervalInput {
  label: string;

  className?: string;
}

export function DateIntervalInput({ label, className }: IDateIntervalInput) {
  return (
    <div>
      <DateIntervalTrigger className={className} />
    </div>
  );
}
