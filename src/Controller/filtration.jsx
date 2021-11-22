const filtration = (array, filterObject, param, action) => {
  const isBoolean = filterObject[param].includes("!");
  const current = filterObject[param];
  action(
    array.filter((item) =>
      isBoolean ? !item[current.replace("!", "")] : item[current]
    )
  );
};

export default filtration;
