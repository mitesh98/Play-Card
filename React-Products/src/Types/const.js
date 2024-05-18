export const cardType = {
  DIAMOND: "diamond",
  HEART: "heart",
  CLUB: "club",
  SPADE: "spade",
};
export const typeMap = [
  cardType.CLUB,
  cardType.DIAMOND,
  cardType.HEART,
  cardType.SPADE,
];
const numberMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "K"];
export const getMapping = (number) => {
  const indexType = Math.ceil(number / 13) - 1;
  const indexNumber = number % 13;

  return {
    number: numberMap[indexNumber],
    type: typeMap[indexType],
  };
};
