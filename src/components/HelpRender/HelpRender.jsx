import { useEffect } from "react";

const HelpRender = (props) => {
  useEffect(() => {
    props.helpRender(JSON.parse(window.localStorage.getItem("courseId")));
  }, []);
  return <></>;
};

export default HelpRender;
