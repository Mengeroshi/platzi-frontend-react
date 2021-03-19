import React from 'react';
import confLogo from '../images/badge-header.svg';
import './styles/Badge.css'
import Gravatar from './Gravatar';


class Badge extends React.Component{

    render(){
        const {firstName, lastName, email, jobTitle, twitter} = this.props;
        return(
            <div className="badgee">
                <div className="badge_header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className="badge_section-name">
                    <Gravatar
                    className="badge_avatar"
                    email ={email}
                    />
                    <h3>{firstName} <br/>{lastName}</h3>
                </div>
                <div className="badge_section-info">
                    <p>{jobTitle}</p>
                    <div>{twitter}</div>
                </div>
                <div className="badge_footer">
                    #platziconf
                </div>

            </div>
        )
    }
}

export default Badge;