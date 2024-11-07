export const saveToLocalStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error(`Error saving ${key} to localStorage`, error);
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing ${key} from localStorage`, error);
  }
};

export const loadFromLocalStorage = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState ? JSON.parse(serializedState) : null;
  } catch (error) {
    console.error(`Error loading ${key} from localStorage`, error);
    return null;
  }
};

export const addToArrayInLocalStorage = (key, item) => {
  try {
    let currentItems = loadFromLocalStorage(key, []) || [];
    if (!currentItems.find((existingItem) => existingItem.id === item.id))
      currentItems = [...currentItems, item];
    else
      currentItems = currentItems.map((existingItem) =>
        existingItem.id === item.id
          ? {
              ...existingItem,
              quantity: existingItem.quantity + item.quantity,
            }
          : existingItem
      );
    saveToLocalStorage(key, currentItems);
    return currentItems;
  } catch (error) {
    console.error(`Error adding to array in ${key}`, error);
  }
};

export const removeFromArrayInLocalStorage = (key, item) => {
  try {
    let currentItems = loadFromLocalStorage(key) || [];
    if (!currentItems.find((existingItem) => existingItem.id === item.id))
      currentItems = [...currentItems, item];
    currentItems = currentItems.filter((existingItem) => existingItem.id !== item.id);
    saveToLocalStorage(key, currentItems);
    return currentItems;
  } catch (error) {
    console.error(`Error removing from array in ${key}`, error);
  }
};

export const updateArrayInLocalStorage = (key, item) => {
  try {
    let currentItems = loadFromLocalStorage(key) || [];
    currentItems = currentItems.map((currentItem) =>
      currentItem.id === item.id ? { ...item, quantity: item.quantity } : currentItem
    );
    saveToLocalStorage(key, currentItems);
    return currentItems;
  } catch (error) {
    console.error(`Error removing from array in ${key}`, error);
  }
};

export const saveToSessionStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    sessionStorage.setItem(key, serializedState);
  } catch (error) {
    console.error(`Error saving ${key} to sessionStorage`, error);
  }
};

export const removeFromSessionStorage = (key) => {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing ${key} from sessionStorage`, error);
  }
};

export const loadFromSessionStorage = (key) => {
  try {
    const serializedState = sessionStorage.getItem(key);
    return serializedState ? JSON.parse(serializedState) : null;
  } catch (error) {
    console.error(`Error loading ${key} from sessionStorage`, error);
    return null;
  }
};