export function isRichTextEditorEmpty(value: string) {
  try {
    const data = JSON.parse(value);

    const blocks = data.blocks as Array<{ text: string }>;

    return blocks?.every((block) => !block.text);
  } catch (error) {
    return true;
  }
}
