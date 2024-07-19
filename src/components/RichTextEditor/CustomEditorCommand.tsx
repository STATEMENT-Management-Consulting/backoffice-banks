interface ICustomEditorCommand {
  icon: JSX.Element;
  label: string;
  onClick: () => void;
  isActive?: boolean;
}

export function CustomEditorCommand({
  icon,
  label,
  isActive,
  onClick,
}: ICustomEditorCommand) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`button-empty ${
        isActive ? "[&_svg_*]:fill-primary" : "[&:hover_svg_*]:fill-primary"
      }`}
      title={label}
    >
      {icon}
    </button>
  );
}
