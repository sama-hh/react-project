import './App.css'
import RickAndMorty from "./RickAndMorty.tsx";
import {useEffect, useState} from "react";
import {response} from "../data.ts";
import NothingFound from "./NothingFound.tsx";
import characterType from "./types/RickandMorty.ts";

function App() {
    const [search, setSearch] = useState<string>('');
    const [characters, setCharacters] = useState<characterType[]>(response);
    const [filteredCharacters, setFilteredCharacters] = useState<characterType[]>(characters);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        if (search === '') {
            setFilteredCharacters(characters);
            setError(false);
            return;
        }

        const filtered = characters.filter(character =>
            character.name.toLowerCase().includes(search.toLowerCase())
        );

        if (filtered.length === 0) {
            setError(true);
        } else {
            setError(false)
        }

        setFilteredCharacters(filtered)
    }, [search, characters])

    return (
        <>
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            {error ? <NothingFound/> : <RickAndMorty characters={filteredCharacters}/>}
        </>
    )
}

export default App
