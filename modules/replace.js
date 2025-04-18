export function replaceSymbols(str) {
  return str.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
