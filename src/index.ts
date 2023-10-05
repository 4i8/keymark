function keymark(line: string, key: string, mark = "^") {
  let currentIndex = 0;
  let result = "";
  while (true) {
    const index = line.indexOf(key, currentIndex);
    if (index === -1) {
      break;
    }
    result += line.substring(currentIndex, index);
    const escapeCodePattern = /\x1b\[[0-9;]*m/g;
    const escapeCodes =
      line.substring(index, index + key.length).match(escapeCodePattern) || [];
    const formattedKey = escapeCodes.join("") + key + escapeCodes.join("");
    result += formattedKey;
    currentIndex = index + key.length;
  }
  result += line.substring(currentIndex);
  result +=
    "\n" +
    " ".repeat(line.replace(/\x1b\[[0-9;]+m/g, "").length - key.length) +
    mark.repeat(key.length);
  return result;
}
export default keymark;
