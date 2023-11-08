/**
 * Interface for a data item.
 */
interface DataItem {
  id: number
  name: string
  href: string
}

/**
 * Stores data in local storage.
 * @param item - The data item to store.
 * @returns void
 */
export const storeData = (item: DataItem): void => {
  /**
   * Get the stored data from local storage.
   */
  const storedDataStr = localStorage.getItem("searchData");
  let storedData: DataItem[] = [];

  if (storedDataStr) {
    storedData = JSON.parse(storedDataStr)

    /**
     * Check if the item already exists in the stored data.
     */
    const itemExists = storedData.some((dataItem) => dataItem.id === item.id);

    if (itemExists) {
      return
    }

    /**
     * If the stored data has reached the maximum limit, remove the oldest item.
     */
    if (storedData.length >= 4) {
      storedData.shift()
    }
  }

  /**
   * Add the new item to the stored data and update the local storage.
   */
  storedData.push(item);
  localStorage.setItem("searchData", JSON.stringify(storedData));
};
/**
 * Retrieves data from local storage.
 * @returns An array of data items.
 */
export const getData = () => {
  const storedData = localStorage.getItem('searchData')
  if (storedData) {
    return JSON.parse(storedData)
  }
  return []
}
