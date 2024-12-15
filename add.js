export default function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = ",|\n";
  if (numbers.startsWith("//")) {
    const delimiterLine = numbers.split("\n")[0];
    delimiter = delimiterLine.substring(2); // Extract the custom delimiter
    numbers = numbers.substring(delimiterLine.length + 1); // Remove delimiter line
  }

  const numberArray = numbers
    .split(new RegExp(`[${delimiter}]`))
    .map((num) => parseInt(num, 10));
  return numberArray.reduce((total, num) => total + num, 0);
}
