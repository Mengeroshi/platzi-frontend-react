import React from 'react';
import twitterLogo from '../images/twitterLogo.svg';
import './styles/BadgeList.css';
import './styles/Badge.css';
import {Link} from 'react-router-dom';
import Gravatar from './Gravatar';

function BadgesList(props){

        const badges = props.badges;
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
            <React.Fragment>
                <div className="form-group">
                <label>FiterBadges</label>
                <input type="text" className="form-control"/>
                </div>
                <ul className="list-unstyled">
                {badges.map(badge=>{
                    return(
                        <li  key={badge.id}>
                            <Link className="badge_item text-reset  text-decoration-none" to={`badges/${badge.id}`}>
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
                            </Link>
                        </li>
                    )
                })}
            </ul>
            </React.Fragment>
        )

}

export default BadgesList;