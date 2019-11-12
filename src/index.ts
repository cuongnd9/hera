/**
 * Create a random string with length equals 4.
 */
function s4(): string {
  return Math.round(new Date().getTime() * Math.random())
    .toString(16)
    .substr(0, 4);
}

/**
 * Create a random number between 0 and (length - 1).
 * @param length Length of chaining numbers.
 */
function ramdomNumber(length: number): number {
  return Math.floor(Math.random() * length);
}

/**
 * Create a default Id with length equals 24.
 */
function defaultId(): string {
  const charCodes = ['-', '_', '@', '#', '$', '%', '^', '&', '*'];
  const { length } = charCodes;
  return (
    s4() +
    charCodes[ramdomNumber(length)] +
    s4() +
    charCodes[ramdomNumber(length)] +
    s4() +
    charCodes[ramdomNumber(length)] +
    s4() +
    charCodes[ramdomNumber(length)] +
    s4()
  );
}

/**
 * Create a lovely Id with thinid.
 * @param length Length of Id.
 */
export function thinid(length?: number): string {
  if (!length || length <= 0) {
    return defaultId();
  }

  const defaultLength = defaultId().length;
  const x = length % defaultLength;
  const y = Math.floor(length / defaultLength);
  let result = defaultId().substr(0, x);
  for (let i = 0; i < y; i++) {
    result += defaultId();
  }
  return result;
}
