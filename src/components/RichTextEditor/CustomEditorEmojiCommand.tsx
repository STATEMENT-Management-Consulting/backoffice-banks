interface ICustomEditorEmojiCommand {
  icon: JSX.Element;
  label: string;
  onClick: (command: string) => void;
  className?: string;
  isActive?: boolean;
}

export function CustomEditorEmojiCommand({
  icon,
  label,
  className,
  isActive,
  onClick,
}: ICustomEditorEmojiCommand) {
  return (
    <button
      type="button"
      onClick={() => onClick("underline")}
      className={`${className} font-semibold hover:bg-primary hover:bg-opacity-10 ${
        isActive ? "bg-primary text-white" : "bg-white text-text"
      }`}
      title={label}
    >
      {icon}
    </button>
  );
}
