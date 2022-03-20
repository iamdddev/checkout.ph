import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useNavigation<T extends { path: string }>(navitation: T[] = []) {
  const [items, setItems] = useState<T[]>([]);

  const navigate = useNavigate()

  const handleNavigate = (path: string) => {
      setItems(prev => prev.map(item => ({ ...item, current: item.path === path ? true : false })))
    navigate(path)
  }

  useEffect(() => {
    setItems(navitation);
  }, [navitation]);

  return {
    navigations: items,
    navigate: handleNavigate,
  };
}

export default useNavigation;
