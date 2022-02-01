import React from 'react';


const useCharacters = (url) =>{
    const [characters, setCharacters] = React.useState([]);

    React.useEffect(async()=>{
        let res = await fetch(url);
        let data = await res.json()
        setCharacters(data.results)
        
    }, [url]);
    return characters;
}

export{useCharacters}