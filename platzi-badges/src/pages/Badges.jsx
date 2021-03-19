import React from 'react';
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'
import {Link} from 'react-router-dom';
import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError'

class Badges extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            loading: true,
            error: null,
            data: undefined,
            
        }
        //console.log("1.Constructor");
    }
    
    componentDidMount(){
       this.fetchData();

    }

    fetchData = async ()=>{
        this.setState({loading:true, error: null});
       try{
           const data = await api.badges.list();
           this.setState({loading:false, data: data});

       }catch(error){
        this.setState({loading:false, error: error});
       } 
    }
    /*
    componentDidUpdate(prevProps, PrevState){
        console.log("5.componentDidUpdate");
        console.log({
            prevProps:prevProps,
            PrevState: PrevState,
        })
        console.log({
            props: this.props,
            state: this.state,
        })
    }

    componentWillUnmount(){
        console.log('6.componentWillUnmount')
        clearTimeout(this.timeoutId);
    }
*/
    render(){
        //console.log("2/4.Render");

        if(this.state.loading ===true){
            return <PageLoading/>
        }

        if(this.state.error){
            return <PageError error={this.state.error}/>
        }
        return(
           <React.Fragment>
               <div className="Badges">
                   <div className="Badges__hero">
                       <div className="Badges__container">
                           <img 
                           src={confLogo} 
                           alt="confLogo" 
                           className="Badges_conf-logo"
                           />
                       </div>
                   </div>
               </div>
               <div className="Badge__container">
                   <div className="Badges__buttons">
                       <Link to="/badges/new" className="btn btn-primary">
                           New Badge
                       </Link>
                   </div>
                   <div className="Badges__list">
                       <div className="Badges__container">
                           <BadgesList badges={this.state.data}/>
                       </div>
                   </div>
               </div>
           </React.Fragment>
        );
    }
}

export default Badges;