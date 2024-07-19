import { ReactNode } from "react";
import { CustomEditor } from "./CustomEditor";
import { isRichTextEditorEmpty } from "./utils/isRichTextEditorEmpty";
// import { isRichTextEditorEmpty } from "./utils/isRichTextEditorEmpty";

interface IRichTextEditor {
  label?: string;
  required?: boolean;
  className?: string;
  error?: string;
  onChange: (desc: string) => void;
  value?: string;
  editorClassName?: string;
  disabled?: boolean;
  reverse?: boolean;
  rightElement?: ReactNode;
}

export function RichTextEditor({
  required,
  label,
  className,
  error,
  onChange,
  value,
  editorClassName,
  disabled,
  reverse,
  rightElement,
}: IRichTextEditor) {
  const handleOnChange = (value?: string) => {
    if (value) {
      const isEmpty = isRichTextEditorEmpty(value);

      onChange?.(isEmpty ? "" : value);
    } else {
      onChange?.("");
    }
  };

  return (
    <div className={`stack gap-y-[0.68rem] ${className}`}>
      {label && (
        <label
          className="text-body-md font-medium text-dark-blue-shade1"
          htmlFor={label}
        >
          {label}
          {required && (
            <span className="text-red-shade6 font-bold text-body-xl"> *</span>
          )}
        </label>
      )}
      <CustomEditor
        editorClassName={editorClassName}
        value={value}
        error={error}
        reverse={reverse}
        onChange={handleOnChange}
        disabled={disabled}
        rightElement={rightElement}
      />
      {error && (
        <p className="text-body-sm font-medium self-start text-red-shade6">
          {error}
        </p>
      )}
    </div>
  );
}
