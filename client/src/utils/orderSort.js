const sortById = (isAscending) => {
  return isAscending
    ? (a, b) => (a.id < b.id ? -1 : 1)
    : (a, b) => (a.id < b.id ? 1 : -1);
};

const sortByName = (isAscending) => {
  return isAscending
    ? (a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
    : (a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1);
};

const sortByDate = (isAscending) => {
  return isAscending
    ? (a, b) => (a.date < b.date ? -1 : 1)
    : (a, b) => (a.date < b.date ? 1 : -1);
};

export const orderSort = (array, type, isAscending, search = "") => {
  array = search
    ? array.filter(
        (order) =>
          order.name.toLowerCase().includes(search.toLowerCase()) ||
          order.customer.toLowerCase().includes(search.toLowerCase())
      )
    : array;

  switch (type) {
    case "id":
      return array.sort(sortById(isAscending));
    case "name":
      return array.sort(sortByName(isAscending));
    case "date":
      return array.sort(sortByDate(isAscending));
    default:
      return array.sort(sortById(true));
  }
};
