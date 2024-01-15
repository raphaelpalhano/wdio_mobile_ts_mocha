export async function getSubStringByKey  (mainString: string, key: string) {
  const indexOfFirst = mainString.indexOf(key);
  return mainString.slice(0, indexOfFirst);
}
