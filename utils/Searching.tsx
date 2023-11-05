interface DataItem {
  id: number;
  name: string;
  href: string;
}

export const storeData = (item: DataItem) => {
  const storedDataStr = localStorage.getItem("searchData");
  let storedData: DataItem[] = [];

  if (storedDataStr) {
    storedData = JSON.parse(storedDataStr);

    const itemExists = storedData.some((dataItem) => dataItem.id === item.id);
    if (itemExists) {
      return;
    }

    if (storedData.length >= 4) {
      storedData.shift();
    }
  }

  storedData.push(item);
  localStorage.setItem("searchData", JSON.stringify(storedData));
};

export const getData = () => {
  const storedData = localStorage.getItem("searchData");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};
