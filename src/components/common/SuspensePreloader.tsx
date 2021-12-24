import { FC, Suspense } from "react";
import Preloader from "./Preloader";

interface PropsType {
  child: object;
};
const SuspensePreloader: FC<PropsType> = ({ child }) => {
  return <Suspense fallback={<Preloader />}>{child}</Suspense>;
};

export default SuspensePreloader;
