export function sortByDate(a: any, b: any) {
  const dateA = new Date(a.date).getTime();
  const dateB = new Date(b.date).getTime();

  return dateA > dateB ? 1 : -1;
}
