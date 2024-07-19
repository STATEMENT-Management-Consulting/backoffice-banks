import {
  Editor,
  EditorCommand,
  EditorState,
  RichUtils,
  convertToRaw,
} from "draft-js";
import { useEffect, useRef, useState } from "react";
import { initializeRichTextEditor } from "./utils/initializeRichTextEditor";

interface IUseCustomEditor {
  value?: string;
  onChange?: (value: string) => void;
  hasError?: boolean;
}

export function useCustomEditor({
  value,
  onChange,
  hasError,
}: IUseCustomEditor) {
  const editorRef = useRef<Editor>(null);

  const [editorState, setEditorState] = useState(
    value ? initializeRichTextEditor(value) : EditorState.createEmpty()
  );

  const focusEditor = () => {
    if (editorRef?.current) editorRef.current?.focus();
  };

  const handleOnChange = (state: EditorState) => {
    setEditorState(state);
    if (hasError) {
      const contentState = state?.getCurrentContent();
      const rawContentState = JSON.stringify(convertToRaw(contentState));
      onChange?.(rawContentState);
    }
  };

  const handleKeyCommand = (
    command: EditorCommand,
    editorState: EditorState
  ) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const fillOnChangeOnBlur = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = JSON.stringify(convertToRaw(contentState));
    onChange?.(rawContentState);
  };

  useEffect(() => {
    if (value) setEditorState(initializeRichTextEditor(value));
  }, [value]);

  return {
    editorRef,
    editorState,
    setEditorState,
    focusEditor,
    handleOnChange,
    handleKeyCommand,
    fillOnChangeOnBlur,
  };
}
