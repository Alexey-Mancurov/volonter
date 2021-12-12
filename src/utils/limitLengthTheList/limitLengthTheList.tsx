const limitLengthTheList = (list: Array<any>, length: number) => {
  if (list.length > length) {
    list.length = length
    return list
  }
};

export default limitLengthTheList;
