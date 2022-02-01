import React from "react";
import { Search } from "./Search";
import { useCharacters } from "../hooks/useCharacter";

const API = 'https://rickandmortyapi.com/api/character/';

const initialState = {
    favorites: [],
}

const favoriteReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TO_FAVORITE':
            return{
                ...state,
                favorites:[...state.favorites, action.payload]
            }
        default:
            return state;
    }
}

const Characters = () =>{
    const characters = useCharacters(API)
    const [favorites, dispatch] = React.useReducer(favoriteReducer, initialState);
    const [search, setSearch] = React.useState('');
    const searchInput = React.useRef(null);

    const handleClick = favorite =>{
        dispatch({
            type:'ADD_TO_FAVORITE',
            payload: favorite
        })
    }
    // const handleSearch = () =>{
    //     setSearch(searchInput.current.value);
    // }

    const handleSearch = React.useCallback(()=>{
        setSearch(searchInput.current.value);
    }, [])

    // const filteredUsers = characters.filter(user =>{
    //     return user.name.toLowerCase()
    //         .includes(search.toLowerCase())
    // })

    const filteredUsers = React.useMemo(() =>(
        characters.filter(user =>{
            return user.name.toLowerCase()
                .includes(search.toLowerCase())
        })
    ), [characters, search] )

    


   return(
    <div className="Characters">
        {favorites.favorites.map( fav =>{
            return(
                <div key={`fav--${fav.id}`}>
                    <img src={fav.image} alt="" />
                    <h2>{fav.name}</h2>
                </div>
            )
        })
        }
        <Search 
            search={search} 
            searchInput={searchInput} 
            handleSearch={handleSearch}
        />
        
        {filteredUsers.map(character =>{
            return(
                <div key={character.id}>
                    <h2>{character.name}</h2>
                    <button 
                        type="button"
                        onClick={()=>handleClick(character)}
                    >
                        Agregar a favoritos    
                    </button>
                </div>
            )
            })
        }
    </div>
   )
    
}

export {Characters}