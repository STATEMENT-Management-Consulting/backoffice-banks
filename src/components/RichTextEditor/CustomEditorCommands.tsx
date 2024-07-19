import { ReactNode } from "react";
import { useCustomEditorCommands } from "./useCustomEditorCommands";
import { CustomEditorCommand } from "./CustomEditorCommand";
import { useComponentsDictionary } from "locales/t/components";
import { EditorState } from "draft-js";
import { BoldIcon } from "@/assets/feather-icons/text/BoldIcon";
import { ItalicIcon } from "@/assets/feather-icons/text/ItalicIcon";
import { UnderlineIcon } from "@/assets/feather-icons/text/UnderlineIcon";
import { EmojiIcon } from "@/assets/feather-icons/text/EmojiIcon";
import { BulletPoints } from "@/assets/feather-icons/text/BulletPoints";
import { AlignTextCenterIcon } from "@/assets/feather-icons/text/AlignTextCenterIcon";
import { InsertLinkIcon } from "@/assets/feather-icons/text/InsertLinkIcon";

interface ICustomEditorCommands {
  children?: ReactNode;
  className?: string;
  editorState: EditorState;
  setEditorState: (state: EditorState) => void;
}

export function CustomEditorCommands({
  children,
  className,
  editorState,
  setEditorState,
}: ICustomEditorCommands) {
  const {
    onBoldClick,
    onItalicClick,
    onUnderlineClick,
    onBulletListClick,
    isStyleActive,
    isBlockTypeActive,
  } = useCustomEditorCommands({ editorState, setEditorState });
  const componentsDictionary = useComponentsDictionary();

  return (
    <div className={`flex  px-6 py-4 ${className} justify-between`}>
      <div className="flex gap-x-6 items-center">
        <CustomEditorCommand
          icon={BoldIcon}
          label={componentsDictionary("RichTextEditor.commands.bold")}
          onClick={onBoldClick}
          isActive={isStyleActive("bold")}
        />
        <CustomEditorCommand
          icon={ItalicIcon}
          label={componentsDictionary("RichTextEditor.commands.italic")}
          onClick={onItalicClick}
          isActive={isStyleActive("italic")}
        />
        <CustomEditorCommand
          icon={UnderlineIcon}
          label={componentsDictionary("RichTextEditor.commands.underline")}
          onClick={onUnderlineClick}
          isActive={isStyleActive("underline")}
        />
        {/* <CustomEditorCommand
          icon={EmojiIcon}
          label={componentsDictionary("RichTextEditor.commands.emoji")}
          onClick={() => alert("Insert Emoji")}
        /> */}
        <CustomEditorCommand
          icon={InsertLinkIcon}
          label={componentsDictionary("RichTextEditor.commands.link")}
          onClick={onItalicClick}
          isActive={isStyleActive("underline")}
        />
        <CustomEditorCommand
          icon={BulletPoints}
          label={componentsDictionary("RichTextEditor.commands.bullet-point")}
          onClick={onBulletListClick}
          isActive={isBlockTypeActive("unordered-list-item")}
        />
        <CustomEditorCommand
          icon={AlignTextCenterIcon}
          label={componentsDictionary(
            "RichTextEditor.commands.align-text-center"
          )}
          onClick={onItalicClick}
          isActive={isBlockTypeActive("unordered-list-item")}
        />
      </div>
      {children}
    </div>
  );
}
