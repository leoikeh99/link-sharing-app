export function containsDuplicates(array: Array<number>) {
  if (array.length !== new Set(array).size) {
    return true;
  }

  return false;
}
