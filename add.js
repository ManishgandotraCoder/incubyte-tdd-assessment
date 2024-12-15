export default function add(numbers) {
  if (numbers === "") return 0;

  const numberArray = numbers.split(/,|\n/).map((num) => parseInt(num, 10)); // Support commas and newlines
  return numberArray.reduce((total, num) => total + num, 0);
}
