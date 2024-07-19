import { EditorState, RichUtils } from "draft-js";

interface IUseCustomEditorCommands {
  editorState: EditorState;
  setEditorState: (state: EditorState) => void;
}

export function useCustomEditorCommands({
  editorState,
  setEditorState,
}: IUseCustomEditorCommands) {
  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };

  const onUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
  };

  const onBulletListClick = () => {
    setEditorState(
      RichUtils.toggleBlockType(editorState, "unordered-list-item")
    );
  };

  const onNumberListClick = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "ordered-list-item"));
  };

  const isStyleActive = (style: "bold" | "italic" | "underline") => {
    const currentStyle = editorState.getCurrentInlineStyle();
    return currentStyle.has(style.toUpperCase());
  };

  const isBlockTypeActive = (
    blockType: "ordered-list-item" | "unordered-list-item"
  ) => {
    const selection = editorState.getSelection();
    const currentBlockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();
    return currentBlockType === blockType;
  };

  return {
    onBoldClick,
    onItalicClick,
    onUnderlineClick,
    onBulletListClick,
    onNumberListClick,
    isStyleActive,
    isBlockTypeActive,
  };
}
