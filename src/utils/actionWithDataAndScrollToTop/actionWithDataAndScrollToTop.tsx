const actionWithDataAndScrollToTop = (
  data: number | string | object | Array<any> | undefined,
  action: Function
) => {
  action(data);
  if (window.scrollY > 0) {
    window.scrollTo(0, 0);
  }
};
export default actionWithDataAndScrollToTop;
