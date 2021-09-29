import React from "react";
import { TodoContext } from "../TodoContext";
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList/index";
import TodoItem from "../TodoItem";
import CreateTodoButton from "../CreateTodoButton";



const AppUI = () => {

   const value = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoContext.Consumer>
                {({
                    error, 
                    loading, 
                    searchedTodos, 
                    completeTodo, 
                    deleteTodo}) =>{
                    return(
                        <TodoList>
                            {error && <p>Error, espere</p>}
                            {loading && <p>Estamos cargado, espere</p>}
                            {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}
                            {searchedTodos.map(todo => (
                                <TodoItem 
                                    key={todo.text} 
                                    text={todo.text}
                                    completed={todo.completed}
                                    onComplete={() => completeTodo(todo.text)}
                                    onDelete={() => deleteTodo(todo.text)}
                    
                                />
                            ))}
                        </TodoList>
                    )
                }}
            </TodoContext.Consumer>
            <CreateTodoButton/>
      </React.Fragment>
      );
}


export default AppUI;