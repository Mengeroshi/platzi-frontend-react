import React from 'react';
import twitterLogo from '../images/twitterLogo.svg';
import './styles/BadgeList.css';
import './styles/Badge.css';
import {Link} from 'react-router-dom';
import Gravatar from './Gravatar';


function useSearchBadges(badges){
    const [query, setQuery] = React.useState('');
    const [filteredBadges, setfilteredBadges] = React.useState(badges);
    
        React.useMemo(()=>{
            const result = badges.filter(badge => 
                `${badge.firstName} ${badge.lastName }`.toLowerCase().includes(query.toLowerCase()))
            setfilteredBadges(result)
        }, [badges, query])
    
    return {query,setQuery, filteredBadges}
}

function BadgesList(props){
        const badges = props.badges;
       const {query, setQuery, filteredBadges} = useSearchBadges(badges)
        if(filteredBadges.length === 0){
            return(
                <div>
                    <div className="form-group">
                        <label>FiterBadges</label>
                        <input type="text" className="form-control"
                            value={query}
                            onChange={(e)=>{
                                setQuery(e.target.value)
                            }}
                        />
                    </div>
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
                    <input type="text" className="form-control"
                        value={query}
                        onChange={(e)=>{
                            setQuery(e.target.value)
                        }}
                    />
                </div>
                <ul className="list-unstyled">
                {filteredBadges.map(badge=>{
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