export function concatArr<BaseType, OtherType>(
  base: Array<BaseType>,
  array: Array<OtherType>
) {
  const newArray = array.filter((el) => !!el);

  return [...base, ...newArray];
}
