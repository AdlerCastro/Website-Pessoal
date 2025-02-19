interface DivideArrayProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  array: any[];
}

export function useDivideArray({ array }: DivideArrayProps) {
  if (array.length === 2) {
    return { firstHalf: [array[0]], secondHalf: [array[1]] };
  }

  if (array.length % 2 !== 0) {
    const half = array.length / 2 + 1;
    const firstHalf = array.slice(0, half);
    const secondHalf = array.slice(half, array.length);

    return { firstHalf, secondHalf };
  }

  const half = array.length / 2;
  const firstHalf = array.slice(0, half);
  const secondHalf = array.slice(half, array.length);

  return { firstHalf, secondHalf };
}
