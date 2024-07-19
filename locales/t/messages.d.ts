export type ExtractRecursiveKeys<
  KeyPath,
  Separator extends string = "."
> = KeyPath extends object
  ? {
      [Key in keyof KeyPath]: KeyPath[Key] extends string
        ? Key
        : `${Key}.${ExtractRecursiveKeys<KeyPath[Key], Separator>}`;
    }[keyof KeyPath]
  : KeyPath;
