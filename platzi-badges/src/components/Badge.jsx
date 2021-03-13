import React from 'react';
import confLogo from '../images/badge-header.svg';
import './styles/Badge.css'


class Badge extends React.Component{

    render(){
        return(
            <div className="badgee">
                <div className="badge_header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className="badge_section-name">
                    <img className="badge_avatar " src={this.props.avatar} alt="Avatar"/>
                    <h3>{this.props.firstName} <br/>{this.props.lastName}</h3>
                </div>
                <div className="badge_section-info">
                    <p>{this.props.jobTitle}</p>
                    <div>{this.props.twitter}</div>
                </div>
                <div className="badge_footer">
                    #platziconf
                </div>

            </div>
        )
    }
}

export default Badge;