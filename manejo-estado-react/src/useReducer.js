import React from "react";

const SECURITY_CODE = 'paradigma';

const initialState  = {
    value:'',
    error: false,
    loading: false,
    deleted: false,
    confirmed:false,
}
const actionTypes = {
    confirm: 'CONFIRM',
    error: 'ERROR',
    write: 'WRITE',
    check: 'CHECK',
    delete: 'DELETE',
    reset: 'RESET',
}
const reducerObject = (state, payload) =>{
    return{
        [actionTypes.confirm]:{
            ...state,
            error: false,
            loading: false,
            confirmed: true,
        },
        [actionTypes.error]: {
            ...state,
            loading: false,
            error: true,
        },
        [actionTypes.write]:{
            ...state,
            value: payload
        },
        [actionTypes.check]: {
            ...state,
            loading: true,
        },
        [actionTypes.delete]: {
            ...state,
            deleted: true,
            value: '',
        },
        [actionTypes.reset]:{
            ...state,
            confirmed: false,
            deleted: false,
            value: '',
        }
    }
}

const reducer = (state, action) =>{
    if(reducerObject(state)[action.type]){
        return reducerObject(state, action.payload)[action.type];
    }else{
        return state;
    }
}


const UseReducer = ({name}) => {
    const [state,dispatch] = React.useReducer(reducer, initialState); 

    const onConfirm = () =>{
        dispatch({type:actionTypes.confirm});
    }
    const onError = () => {
        dispatch({type:actionTypes.error});
    }
    const onWrite = (event) =>{
        dispatch({type:actionTypes.write, payload: event.target.value})
    }
    const onCheck = () =>{
        dispatch({type:actionTypes.check})
    }
    const onDelete = () =>{
        dispatch({type:actionTypes.delete})
    }
    const onReset=() =>{
        dispatch({type:actionTypes.reset})
    }
         
    React.useEffect(() =>{
        console.log('Empezando el efecto');
        if(state.loading === true){ 
            setTimeout(()=>{
                console.log('Haciendo la validacion')

                if(state.value === SECURITY_CODE ){
                    onConfirm()
                }else{
                    onError()
                }
                console.log('Terminando la validacion')
            }, 3000);
        }
        console.log('Terminando el efecto');
    }, [state.loading])
    if(!state.deleted &&  !state.confirmed){
        return(
            <div>
                <h2>Eliminar {name}</h2>
                <p>Por favor escribe el codigo de seguridad</p>
                {(state.error && !state.loading) &&( 
                    <p>Error: El codigo es incorrecto</p>
                    ) 
                }
                {state.loading &&( 
                    <p>CARGANDO...</p>
                    ) 
                }
                <input
                    placeholder="codigo de seguridad"
                    value={state.value}
                    onChange={onWrite}
                 />
    
                <button onClick={onCheck}
                >Comprobar</button>
            </div>
        )
    }else if(state.confirmed && !state.deleted){
        return(
            <>
                <p>Pedimos confirmacion ¿tas seguro?</p>
                <button
                    onClick={onDelete}
                >Si eliminar</button>

                <button
                    onClick={onReset}
                >Nop, me arrepenti</button>
            </>
        )
    }else{
        return(
            <>
                <p>Eliminado con Exito</p>
                <button
                    onClick={onReset}
                >Volver a atras</button>
            </>
        )
    }
}
export {UseReducer}