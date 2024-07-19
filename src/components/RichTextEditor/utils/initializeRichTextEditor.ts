import { EditorState, convertFromRaw } from "draft-js";
import { isStringParsableJSON } from "./isStringParsableJSON";
import { createRawDraftContentState } from "./createRawDraftContentState";

export function initializeRichTextEditor(value: string) {
  const contentState = convertFromRaw(
    isStringParsableJSON(value)
      ? JSON.parse(value)
      : createRawDraftContentState(value)
  );
  const state = EditorState.createWithContent(contentState);

  return state;
}
