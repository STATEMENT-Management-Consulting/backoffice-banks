import { Editor } from "draft-js";
import { HTMLAttributes, ReactNode } from "react";
import styles from "./CustomEditor.module.css";
import { useCustomEditor } from "./useCustomEditor";
import { CustomEditorCommands } from "./CustomEditorCommands";
import "draft-js/dist/Draft.css";
import { cn } from "@/styles/utils";

interface ICustomEditor
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  rightElement?: ReactNode;
  commandsClassNames?: string;
  onChange?: (value: string) => void;
  error?: string;
  value?: string;
  editorClassName?: string;
  disabled?: boolean;
  reverse?: boolean;
  hasError?: boolean;
}

export function CustomEditor({
  rightElement,
  commandsClassNames,
  onChange,
  error,
  value,
  editorClassName,
  disabled,
  reverse,
  hasError,
  ...props
}: ICustomEditor) {
  const {
    editorRef,
    editorState,
    setEditorState,
    focusEditor,
    handleOnChange,
    handleKeyCommand,
    fillOnChangeOnBlur,
  } = useCustomEditor({ value, onChange, hasError });

  return (
    <div
      className={`flex ${
        reverse ? "stack-reverse" : "flex-col"
      } border border-border rounded-2xl ${
        error ? "border-red-shade6 divide-red-shade6" : ""
      }`}
    >
      <CustomEditorCommands
        className={commandsClassNames}
        setEditorState={setEditorState}
        editorState={editorState}
      >
        {rightElement}
      </CustomEditorCommands>
      {reverse ? <div className="rule-horizontal" /> : null}
      <div
        className={cn(
          `custom-editor max-h-[500px] min-h-[200px] cursor-text overflow-auto px-6 py-4 outline-none`,
          editorClassName,
          styles.CustomEditor
        )}
        onClick={focusEditor}
        onBlur={fillOnChangeOnBlur}
        {...props}
      >
        <Editor
          ref={editorRef}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
}
