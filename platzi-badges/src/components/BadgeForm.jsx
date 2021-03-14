import React from 'react';


class BadgeForm extends React.Component{
    /*state ={
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    }; */
   /*handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value,
        })
    } */
    
    handleClick = e =>{
        console.log('clicked');
    }
    handleSubmit = e =>{
        e.preventDefault()
        console.log('submit');
        console.log(this.state)
    }
    render(){
        const {firstName, lastName, email, jobTitle, twiiter} = this.props.formValues
        return(
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="firstName"
                        value={firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="lastName"
                        value={lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="email" 
                        name="email"
                        value={email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="jobTitle"
                        value={jobTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="twitter"
                        value={twiiter}
                        />
                    </div>
                    <button /*type="button"*/ onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;