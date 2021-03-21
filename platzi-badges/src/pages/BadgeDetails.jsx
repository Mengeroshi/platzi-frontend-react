import React, {useState} from 'react';
import confLogo from '../images/platzi-conf-logo.svg';
import './styles/BadgeDetails.css'
import {Link} from 'react-router-dom'
import Badge from '../components/Badge';
import DeleteBadgeModal from "../components/DeleteBadgeModal";


function useIncreaseCount(max){
    const [count, setCount] = useState(0);
    if(count > max){
        setCount(0)
    }
    return[count, setCount]
}

function BadgeDetails({badge, onCloseModal, onOpenModal, modalIsOpen,  onDeleteBadge}){
    const [count, setCount] = useIncreaseCount(4)
    return(
        <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={confLogo} alt="Logo de la conf"/>
                            </div>
                            <div className="col 6 BadgeDetails__hero-attendant-name">
                                <h1>{badge.firstName} {badge.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            email={badge.email}
                            twitter={badge.twitter}
                            jobTitle={badge.jobTitle}
                            />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <div>
                                <button onClick={()=>{setCount(count + 1)}} className="btn btn-primary mr-4">
                                    Increase Count: {count}
                                </button>
                                <button className="btn btn-primary mr-4" >
                                    <Link to={`/badges/${badge.id}/edit`}>
                                        Edit
                                    </Link>
                                </button>
                                <button
                                onClick={onOpenModal}
                                 className="btn btn-danger">Delete </button>
                                 <DeleteBadgeModal 
                                 isOpen={modalIsOpen} 
                                 onClose={onCloseModal}
                                 onDeleteBadge={onDeleteBadge}
                                 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default BadgeDetails;