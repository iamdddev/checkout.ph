import { useCallback, useEffect, useState } from "react";

export function useSelect<T extends { value: string; current?: boolean }>(
  selections: T[] = [],
  selected?: string
) {
  const [items, setItems] = useState<T[]>([]);

  const handleSelect = (value: string) =>
    setItems((prev) =>
      prev.map((item) => ({
        ...item,
        current: item.value === value ? true : false,
      }))
    );

  const getCurrent = useCallback(() => {
    return items.find((item) => item.current);
  }, [items]);

  useEffect(() => {
    setItems(selections.map(item => ({...item, current: item.value === selected})))
  }, [selections, selected]);

  return {
    items,
    onSelect: handleSelect,
    selected: getCurrent(),
  };
}

export default useSelect;
