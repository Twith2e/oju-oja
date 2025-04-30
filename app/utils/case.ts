export function titleCase(word: string) {
  return word.split("").map((char, index) => {
    if (index === 0) {
      return char.toUpperCase();
    }
    return char.toLowerCase();
  });
}
