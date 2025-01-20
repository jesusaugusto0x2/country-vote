import { useCallback, useEffect, useRef, useState } from "react";

export const useDebounce = <T>(value: T, delay = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    clearTimer();

    timerRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return clearTimer;
  }, [value, delay, clearTimer]);

  return debouncedValue;
};
