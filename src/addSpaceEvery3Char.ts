function addSpaceEvery3Char({
  num,
  count = 1,
  separator = " ",
  decimal = ",",
}: {
  num: string | number;
  count?: number;
  separator?: string;
  decimal?: string;
}) {
  if (typeof num !== "string" && typeof num !== "number")
    return "invalid number";

  let value = String(Number(num).toFixed(count))
    .replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, separator)
    .replace(".", decimal);
  return value === "null" ? 0 : value;
}

export { addSpaceEvery3Char };
