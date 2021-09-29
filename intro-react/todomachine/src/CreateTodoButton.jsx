import React from "react";
import './styles/CreateTodoButton.css';

const CreateTodoButton = () =>{

    const onClickButton = () =>{
        alert('Modal papue')
    }
    return(
        <button className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    )
}

export default CreateTodoButton;