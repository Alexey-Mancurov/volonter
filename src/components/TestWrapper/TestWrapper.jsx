import { useEffect, useState } from "react";
import TestBody from "../TestBody/TestBody";
import TestSidebar from "../TestSidebar/TestSidebar";

const TextWrapper = (props) => {

  return (
    <div className="test__wrapper">
      <TestSidebar />
      <TestBody />
    </div>
  );
};

export default TextWrapper;
