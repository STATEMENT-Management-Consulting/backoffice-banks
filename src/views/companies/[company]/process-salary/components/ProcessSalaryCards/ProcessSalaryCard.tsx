type ProcessSalaryCardProps = {
  title?: string;
  value?: string | number;
  children?: React.ReactNode;
};

export function ProcessSalaryCard({
  children,
  title,
  value,
}: ProcessSalaryCardProps) {
  return (
    <div className="p-6 min-w-[21.125rem] border rounded-xl stack justify-center items-start gap-y-4">
      <div className="stack gap-y-2">
        <span className="text-dark-black font-bold text-body-md">{title}</span>

        <h5 className="text-xl text-primary">{value}</h5>
      </div>

      {children}
    </div>
  );
}
