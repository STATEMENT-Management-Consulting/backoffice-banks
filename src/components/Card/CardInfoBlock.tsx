interface ICardInfoBlock {
  label: string;
  value?: string | number | JSX.Element;
  className?: string;
  alignItem?: string;
}

export function CardInfoBlock({
  label,
  value = "- -",
  className,
  alignItem = "items-center",
}: ICardInfoBlock) {
  const title =
    (typeof value === "string" && value?.length > 8 && value) || undefined;

  return (
    <div className={`grid grid-cols-2 gap-x-[0.63rem] ${alignItem}`}>
      <p className="whitespace-break-spaces !normal-case">{label}</p>
      <div
        className={`paragraph font-semibold text-black break-words ${className}`}
        title={title}
      >
        <span className="text-sm font-semibold break-words">{value}</span>
      </div>
    </div>
  );
}
