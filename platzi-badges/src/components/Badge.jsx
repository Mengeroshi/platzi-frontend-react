import React from 'react';
import confLogo from '../images/badge-header.svg';
import './styles/Badge.css'


class Badge extends React.Component{

    render(){
        const {firstName, lastName, avatar, jobTitle, twitter} = this.props;
        return(
            <div className="badgee">
                <div className="badge_header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className="badge_section-name">
                    <img className="badge_avatar " src={avatar} alt="Avatar"/>
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