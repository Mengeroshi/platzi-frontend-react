
import React from 'react';
import platziConfLogo from '../images/platzi-conf-logo.svg';
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import './styles/BadgeNew.css'
import api from '../api';
import PageLoading from '../components/PageLoading'

class BadgeEdit extends React.Component{
    state ={
        loading: true,
        error: null,
        form:{
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    }}
    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    componentDidMount(){
        this.fetchData()
    }
    fetchData = async e =>{
        this.setState({loading:true, error: null});
        try{
            
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading:false, form:data});
        }catch(error){
            this.setState({loading:false, error: error});
        }
    }

    handleSubmit = async e =>{
        e.preventDefault();
        this.setState({loading:true, error: null});
        try{
            await api.badges.update(this.props.match.params.badgeId, this.state.form);
            this.setState({loading:false});

            this.props.history.push('/badges');
        }catch(error){
            this.setState({loading:false, error: error});
        }
    }
    render(){
        if(this.state.loading){
            return <PageLoading/>
        }


        return(
           <React.Fragment>
               <div className="BadgeNew__hero">
                   <img src={platziConfLogo} alt="logo" className="BadgeNew__hero-img img-fluid"/>
               </div>
               <div className="container">
                   <div className="row">
                       <div className="col-6">
                           <Badge 
                           firstName={this.state.form.firstName ||'FIRST NAME'} 
                           lastName={this.state.form.lastName ||'LAST NAME'} 
                           twitter={this.state.form.twitter ||'Twitter'} 
                           jobTitle={this.state.form.jobTitle ||'JOB_TITLE'}
                           email={this.state.form.email ||'EMAIL'}  
                           avatar="https://scontent.fvsa2-1.fna.fbcdn.net/v/t1.0-9/149324350_3781846311882780_7661755297257895561_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFsA5ymc1p4zJ7_kzzLet-Qc-icOhWGEepz6Jw6FYYR6mg0FcJjDBtT5KHpvhNnHUzxCVfHQUWmYYIRv4aO6KTd&_nc_ohc=pTvnv-U9ARMAX-q5zeP&_nc_ht=scontent.fvsa2-1.fna&oh=cb294c28207dfd47ec26b897a586ba06&oe=607280F3"
                           />
                       </div>
                       <div className="col-6">
                       <h1>Edit Attendant</h1>
                           <BadgeForm 
                            onChange={this.handleChange}
                            formValues={this.state.form}
                            onSubmit={this.handleSubmit}
                            error={this.state.error}
                           />
                       </div>
                   </div>
               </div>
           </React.Fragment>
        )
    }
}

export default BadgeEdit;