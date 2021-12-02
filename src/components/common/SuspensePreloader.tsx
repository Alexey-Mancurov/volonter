import { Suspense } from "react";
import Preloader from "./Preloader";

type PropsType = {
  child: object;
};
const SuspensePreloader: React.FC<PropsType> = ({ child }) => {
  return <Suspense fallback={<Preloader />}>{child}</Suspense>;
};

export default SuspensePreloader;
