import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

const TodoForm = () =>{
    const{addTodo, setOpenModal} = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (e) =>{
        setNewTodoValue(e.target.value);
    }
    const onCancel =() =>{
        setOpenModal(false);
    }
    const onSubmit =(e) =>{
        e.preventDefault();
        if(newTodoValue.length <= 0)return;
        addTodo(newTodoValue);
        setOpenModal(false);

    }
    

     return(
        <form onSubmit={onSubmit}>
            <label htmlFor=""></label>
            <textarea name="" id="" cols="30" rows="10"
                placeholder="cortar la cebolla"
                value={newTodoValue}
                onChange={onChange}
            >    
            </textarea>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button-cancel " onClick={onCancel}>Cancelar</button>
                <button className="TodoForm-button TodoForm-button-add" type="submit">Añadir</button>
            </div>
        </form>
    )
}
export default TodoForm;