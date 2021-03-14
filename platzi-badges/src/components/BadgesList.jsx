import React from 'react';
import twitterLogo from '../images/twitterLogo.svg';
import './styles/BadgeList.css';
import './styles/Badge.css';

class BadgesList extends React.Component{
    render(){
        const {badges} = this.props
        return(
            <ul className="list-unstyled">
            {badges.map(badge=>{
                return(
                    <li className="badge_item" key={badge.id}>
                        <img className="badge_avatar" src={badge.avatarUrl} alt=""/>
                        <div className="text">
                            <p className="font-weight-bold">{badge.firstName} {badge.lastName}</p>
                            <div className="twitter">
                                <img className="twitter_logo" src={twitterLogo} alt=""/>
                                <p className="twitter_username">{badge.twitter}</p>
                            </div>
                            <p className="font-weight-light jobTitle">{badge.jobTitle}</p>
                        </div>
                        

                    </li>
                )
            })}
        </ul>
        )
    }

}

export default BadgesList;