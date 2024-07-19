interface ITextWithIcon {
  icon: JSX.Element;
  text: string;
  tooltip?: boolean;
}

export function TextWithIcon({ icon, text, tooltip }: ITextWithIcon) {
  return (
    <div className="flex gap-x-[0.63rem] items-center line">
      {icon}
      <p className="font-bold line-clamp-1" title={tooltip ? text : undefined}>
        {text}
      </p>
    </div>
  );
}
