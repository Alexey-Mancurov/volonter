const actionToggle = (paramRequest: boolean, action: Function) => {
  action(!paramRequest);
};

export default actionToggle;
