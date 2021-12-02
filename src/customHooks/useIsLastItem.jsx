import { useEffect } from "react";
import { useState } from "react";

const useIsLastItem = (list, index) => {
  const [isLastItem, setIsLastItem] = useState(false);

  useEffect(() => {
    const getIsLastItem = (() => {
      list && index && list.items.length === index + 1
        ? setIsLastItem(true)
        : setIsLastItem(false);
    })();
  }, [list, index]);
  return isLastItem;
};

export default useIsLastItem;
