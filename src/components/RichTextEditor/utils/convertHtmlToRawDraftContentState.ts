import { convertToRaw, ContentState, convertFromHTML } from "draft-js";

export function convertHtmlToRawDraftContentState(html: string): string {
  const contentBlocks = convertFromHTML(html);
  const contentState = ContentState.createFromBlockArray(
    contentBlocks.contentBlocks,
    contentBlocks.entityMap
  );

  return JSON.stringify(convertToRaw(contentState));
}
