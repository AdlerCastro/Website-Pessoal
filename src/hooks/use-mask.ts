import { useCallback, useRef } from 'react';

export function useMask() {
  const prevDigitsCount = useRef(0);

  const maskPhone = useCallback((value: string): string => {
    const digits = value.replace(/\D/g, '');
    const currentCount = digits.length;

    if (currentCount < prevDigitsCount.current && currentCount < 2) {
      prevDigitsCount.current = currentCount;
      return digits;
    }

    prevDigitsCount.current = currentCount;

    if (!digits.length) {
      return '';
    }
    if (digits.length < 2) {
      return `(${digits}`;
    }

    let output = `(${digits.slice(0, 2)}) `;
    if (digits.length > 2 && digits.length <= 7) {
      output += digits.slice(2);
      return output;
    } else if (digits.length > 7) {
      output += digits.slice(2, 7) + '-' + digits.slice(7, 11);
      return output;
    }
    return output;
  }, []);

  return { maskPhone };
}
