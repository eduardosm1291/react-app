import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
 
  React.useEffect(() => {
    setTimeout(() => {
      try {
        let parseItem;
        const localStorageItem = localStorage.getItem(itemName);
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItem = [];
        } else {
          parseItem = JSON.parse(localStorageItem);
        }
        setItem(parseItem);
        setLoading(false);
      } catch(error) {
        setError(error);
      }
      
    }, 1800)
  });

 
  
  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
    
  }
  return {
    item,
    saveItem,
    loading,
    error
  };
}

export {useLocalStorage}
