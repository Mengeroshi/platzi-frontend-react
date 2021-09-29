import React from "react";
import './styles/TodoSearch.css';

const TodoSearch = ({searchValue, setSearchValue}) =>{
    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value)
    }
   
    return(
        <>
            <input className="TodoSearch" 
                placeholder="Cebolla"
                onChange={onSearchValueChange}
                value={searchValue}
            />
            <p>{searchValue}</p>
         </>
    )
}

export default TodoSearch;