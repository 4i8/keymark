function keymark(line: string, key: string, mark = "^") {
  const index = line.indexOf(key);
  if (index !== -1) {
    const caret = mark.repeat(key.length);
    const arrow = " ".repeat(index) + caret;
    const highlightedLine = line + "\n" + arrow;
    return highlightedLine;
  } else {
    return line;
  }
}
export default keymark;
