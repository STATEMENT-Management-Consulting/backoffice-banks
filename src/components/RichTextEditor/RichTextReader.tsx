import { Editor, EditorState, convertFromRaw } from "draft-js";
import { isStringParsableJSON } from "./utils/isStringParsableJSON";
import styles from "./CustomEditor.module.css";
import { createRawDraftContentState } from "./utils/createRawDraftContentState";
import { cn } from "@/styles/utils";

interface IRichTextReader {
  value?: string;
}

export function RichTextReader({ value = "" }: IRichTextReader) {
  const editorState = EditorState.createWithContent(
    convertFromRaw(
      isStringParsableJSON(value)
        ? JSON.parse(value)
        : createRawDraftContentState(value)
    )
  );

  return (
    <div className={cn("tracking-wide text-text", styles.CustomEditor)}>
      <Editor
        editorState={editorState}
        readOnly={true}
        onChange={() => {
          // empty
        }}
      />
    </div>
  );
}
