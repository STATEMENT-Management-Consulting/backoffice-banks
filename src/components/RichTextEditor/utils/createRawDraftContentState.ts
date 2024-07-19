import { convertToRaw, ContentState } from "draft-js";

export function createRawDraftContentState(text: string) {
  const contentState = ContentState.createFromText(text);
  return convertToRaw(contentState);
}
