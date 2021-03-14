
import React from 'react';
import NavBar from '../components/NavBar'
import header from '../images/badge-header.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import './styles/BadgeNew.css'

class BadgeNew extends React.Component{
    state ={form:{
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
    render(){
        return(
           <div>
               <NavBar/>
               <div className="BadgeNew__hero">
                   <img src={header} alt="logo" className="img-fluid"/>
               </div>
               <div className="container">
                   <div className="row">
                       <div className="col-6">
                           <Badge 
                           firstName={this.state.form.firstName} 
                           lastName={this.state.form.lastName} 
                           twitter={this.state.form.twitter} 
                           jobTitle={this.state.form.jobTitle}
                           email={this.state.form.email}  
                           avatar="https://scontent.fvsa2-1.fna.fbcdn.net/v/t1.0-9/149324350_3781846311882780_7661755297257895561_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFsA5ymc1p4zJ7_kzzLet-Qc-icOhWGEepz6Jw6FYYR6mg0FcJjDBtT5KHpvhNnHUzxCVfHQUWmYYIRv4aO6KTd&_nc_ohc=pTvnv-U9ARMAX-q5zeP&_nc_ht=scontent.fvsa2-1.fna&oh=cb294c28207dfd47ec26b897a586ba06&oe=607280F3"
                           />
                       </div>
                       <div className="col-6">
                           <BadgeForm 
                           onChange={this.handleChange}
                            formValues={this.state.form}
                           />
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}

export default BadgeNew;