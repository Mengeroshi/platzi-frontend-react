import React from "react";

const useLocalStorage = (itemName, initialValue) =>{
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const[item, setItem] = React.useState(initialValue);
  
    React.useEffect(() =>{
      setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
  
        let parsedItem;
      
        if(!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem = [];
        }else{
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      }catch(error){
         setError(error);
      }
      },1000)
    })
    
    const saveItem = (newItem) =>{
      try {
        const stringifiedItem = JSON.stringify(newItem); 
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    }
    return{
      item, 
      saveItem, 
      loading,
      error
    }
  }

export default useLocalStorage;