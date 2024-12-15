export default function add(numbers) {
  if (numbers === "") return 0;
  const numberArray = numbers.split(",").map((num) => parseInt(num, 10));
  return numberArray.reduce((total, num) => total + num, 0);
}
