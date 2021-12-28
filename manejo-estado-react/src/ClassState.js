import React from "react";

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            error:false,
            loading: false,
            value: "",
        }
    }
    
    componentDidMount(){console.log('SE MONTO')}
    UNSAFE_componentWillMount(){console.log('SE MONTARA')}
    componentWillUnmount(){console.log('SE DESMONTARA')}
    componentDidUpdate(){
        console.log('SE ACTUALIZO');

        if(this.state.loading === true){
            setTimeout(()=>{
                console.log('Haciendo la validacion')
    
                if(this.state.value === SECURITY_CODE ){
                    this.setState({error: false, loading:false});
                }else{
                    this.setState({error: true, loading:false});
                }
                


                console.log('Terminando la validacion')
            }, 3000);
        }
    }
    render(){
        return(
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor escribe el codigo de seguridad</p>
                    {(this.state.error && !this.state.loading) &&( 
                        <p>Error: El codigo es incorrecto</p>
                        ) 
                    }
                    {this.state.loading &&( 
                        <p>CARGANDO...</p>
                        ) 
                    }    
                <input 
                    placeholder="codigo de seguridad"
                    value={this.state.value}
                    onChange={(event)=>{
                        this.setState({
                            ...this.state,
                            value: event.target.value,
                        })
                    }}
                />
                <button
                onClick={()=> this.setState({loading: true})}
                >Comprobar</button>
            </div>
        )
    }
}

export {ClassState}