export default function InitialFilter(name: string): string {
  return name
    .split(' ')
    .reduce((prev, text) => {
      return prev + text.charAt(0);
    }, '')
    .substr(0, 2);
}
