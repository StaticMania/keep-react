/**
 * This file contains utility functions for storing and retrieving search data in localStorage.
 *
 * @remarks
 * The `storeData` function stores a `DataItem` object in localStorage, while the `getData` function
 * retrieves the stored data from localStorage. The stored data is an array of up to 4 `DataItem` objects.
 *
 * @packageDocumentation
 */

interface DataItem {
  id: number // The id of the item
  name: string // The name of the item
  href: string // The href of the item
}

/**
 * Stores a DataItem in localStorage.
 * @param item - The DataItem to store.
 */
export const storeData = (item: DataItem) => {
  // Get the stored data from localStorage
  const storedDataStr = localStorage.getItem('searchData')
  // Initialize an empty array to hold the stored data
  let storedData: DataItem[] = []

  /**
   * If there is stored data, parse it from a string to an array of DataItems
   * and store it in the storedData variable.
   */
  if (storedDataStr) {
    storedData = JSON.parse(storedDataStr)

    // Check if the item already exists in the stored data
    const itemExists = storedData.some((dataItem) => dataItem.id === item.id)
    // If the item already exists, do not store it again
    if (itemExists) {
      return
    }

    // If there are already 4 items stored, remove the oldest one
    if (storedData.length >= 4) {
      storedData.shift()
    }
  }

  // Add the new item to the stored data array
  storedData.push(item)
  // Store the updated data in localStorage
  localStorage.setItem('searchData', JSON.stringify(storedData))
}

/**
 * Gets the stored data from localStorage.
 * @returns The stored data from localStorage.
 */

export const getData = () => {
  const storedData = localStorage.getItem('searchData')
  if (storedData) {
    return JSON.parse(storedData)
  }
  return []
}
