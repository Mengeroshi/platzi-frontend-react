import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

const TodoSearch = () =>{
    const {searchValue, setSearchValue} = React.useContext(TodoContext)

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