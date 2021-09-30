import React from "react";
import { TodoContext } from "../TodoContext";
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList/index";
import TodoItem from "../TodoItem";
import CreateTodoButton from "../CreateTodoButton";
import {Modal} from '../Modal';
import TodoForm from "../TodoForm";



const AppUI = () => {

   const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal, 
   } = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
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
            {!!openModal &&(
                <Modal>
                    <TodoForm/>
                </Modal>
            )
            }
            <CreateTodoButton/>
      </React.Fragment>
      );
}


export default AppUI;