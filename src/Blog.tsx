import Navigation from "./Blog/Navigation.tsx";
import Body from "./Blog/Body.tsx";

type BlogProps = {
    title: string
}

export default function Blog({title}: BlogProps) {
    return <div>
        <h1>{title}</h1>
        <Navigation/>
        <Body/>
    </div>
}