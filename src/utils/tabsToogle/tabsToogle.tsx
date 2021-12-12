const tabsToggle = (
  action: Function,
  setActive: Function,
  isIndex: boolean | undefined,
  index: number,
  data: any,
  e: any
) => {
  if (action) {
    action(isIndex ? index : data, e);
  }
  if (setActive) {
    setActive(index);
  }
};

export default tabsToggle;
