function keymark(line: string, key: string, mark = "^"): string {
  // Remove ANSI escape sequences so that we know the visible characters.
  const plainLine = line.replace(/\x1b\[[0-9;]+m/g, "");
  if (!key) return line; // avoid infinite loop on empty key

  // Create an array (one character per visible character)
  const underlineArr: string[] = Array.from(
    { length: plainLine.length },
    () => " "
  );

  // Find every occurrence of 'key' in the plain text and mark them.
  let startIndex = 0;
  let found = false;
  while (true) {
    const index = plainLine.indexOf(key, startIndex);
    if (index === -1) break;
    found = true;
    for (let i = index; i < index + key.length; i++) {
      underlineArr[i] = mark;
    }
    startIndex = index + key.length;
  }

  if (!found) return line;

  const underline = "\n" + underlineArr.join("");
  return line + underline;
}

export default keymark;
