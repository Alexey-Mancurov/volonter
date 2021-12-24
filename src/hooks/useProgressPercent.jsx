import { useEffect, useState } from "react";

const useProgressPercent = (checkAsks, totalAsks, param, foo) => {
  const [name = param, action = foo] = useState(0);

  useEffect(() => {
    const getFoo = (() => {
      const progressPercent = Math.round((checkAsks / totalAsks) * 100);
      action(progressPercent);
    })();
  }, [checkAsks, totalAsks]);

  return [name, action];
};

export default useProgressPercent;
