import React from 'react';
import twitterLogo from '../images/twitterLogo.svg';
import './styles/BadgeList.css';
import './styles/Badge.css';
import {Link} from 'react-router-dom';
import Gravatar from './Gravatar';

class BadgesList extends React.Component{
    render(){
        const {badges} = this.props;
        if(badges.length === 0){
            return(
                <div>
                    <h3>No Badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create New Badge
                    </Link>
                </div>
            )
        }
        return(
            <ul className="list-unstyled">
            {badges.map(badge=>{
                return(
                    <li className="badge_item" key={badge.id}>
                        <Gravatar
                            className="badge_avatar"
                            email ={badge.email}
                        />
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