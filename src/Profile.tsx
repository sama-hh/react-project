type ProfileProps = {
    authors: string[]
}

export default function Profile({authors}: ProfileProps) {

    return <div>
        <h4>Made by {authors[0]} and {authors[1]}</h4>
        <a rel="icon" href="https://github.com/sama-hh/react-project">Github link to project</a>
    </div>
}