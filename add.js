export default function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = ",|\n";
  if (numbers.startsWith("//")) {
    const delimiterLine = numbers.split("\n")[0];
    delimiter = delimiterLine.substring(2);
    numbers = numbers.substring(delimiterLine.length + 1);
  }

  const numberArray = numbers
    .split(new RegExp(`[${delimiter}]`))
    .map((num) => parseInt(num, 10));

  const negatives = numberArray.filter((n) => n < 0);
  if (negatives.length)
    throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);

  return numberArray.reduce((total, num) => total + num, 0);
}
