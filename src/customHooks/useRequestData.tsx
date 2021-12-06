// action - function
// params - array
// listening - arrya

import { useEffect, useState } from "react";

const useRequestData = (params:Array<any>, listening:Array<any>) => {
  const [data, setData] = useState();
  useEffect(() => {
    // @ts-ignore
    setData(...params);
  }, listening);

  return data;
};

export default useRequestData;
