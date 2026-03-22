export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomSelectedItems = <T extends { selected: boolean }>(
  items: T[],
  minSelected: number,
  maxSelected: number
) => {
  const amountToSelect = getRandomInt(minSelected, maxSelected);
  const shuffled = [...items].sort(() => Math.random() - 0.5);

  const selectedSet = new Set(shuffled.slice(0, amountToSelect));

  return items.map((item) => ({
    ...item,
    selected: selectedSet.has(item),
  }));
};

