import TestCompleted from "../components/TestCompleted";
interface TProps{
    title:string
  }
export const CompletedPage = ({title}:TProps) => {
  return <TestCompleted title={title}/>;
};
