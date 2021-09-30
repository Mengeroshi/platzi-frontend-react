import React from "react"
import './TodoItem.css';
import TodoIcon from '../TodoIcon';

const TodoItem = ({completed, onComplete, text, onDelete}) =>{

    return(
        <li className="TodoItem">
            <TodoIcon
                type="check"
                color={completed? '#4caf50': 'gray'}
                onClick={onComplete}
            />
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
                {text}
            </p>
            <TodoIcon
                type="delete"
                onClick={onDelete}
            />
        </li>
    )
}

export default TodoItem;