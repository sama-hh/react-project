import characterType from "./types/RickandMorty.ts";
type RickandMortyProps = {
    characters: characterType[]
}
const RickAndMorty = ({characters}: RickandMortyProps) => {

    const showResponse = characters.map((character: characterType) => {
        return (
            <div key={character.id}>
                <h4>{character.name}</h4>
            </div>
        )
    })

    return <div className="blog-body">
        {showResponse}
    </div>
}

export default RickAndMorty