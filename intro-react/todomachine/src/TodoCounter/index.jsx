import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';



const TodoCounter = () =>{
    const {totalTodos, completedTodos} = React.useContext(TodoContext);

    return(
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOS</h2>
    )
}

export default TodoCounter;