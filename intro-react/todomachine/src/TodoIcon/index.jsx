import React from 'react';
import './TodoIcon.css';
import {ReactComponent as DeleteSVG} from './delete.svg';
import {ReactComponent as CheckSVG} from './check.svg';



const iconTypes = {
    check: color => (<CheckSVG className="Icon-svg Icon-svg--check"stroke={color}/>),
    delete: color => (<DeleteSVG className="Icon-svg Icon-svg--delete"stroke={color}/>),
}

const TodoIcon = ({type, color="gray", onClick}) =>{
    return(
        <span 
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export default  TodoIcon;