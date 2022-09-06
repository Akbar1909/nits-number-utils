export function createRangeAndDoSomething<T extends (i: number) => void>(
  startIndex: number,
  endIndex: number,
  cb: T
) {
  for (let i = startIndex; i <= endIndex; i++) {
    cb(i);
  }
}
