// action - function
// params - array
// listening - arrya

import { useEffect, useState } from "react";

const useRequestData = (params, listening) => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(...params);
  }, listening);

  return data;
};

export default useRequestData;
