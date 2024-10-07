import NavigationElementProps from "./Element/NavigationElementProps.tsx";

export default function Element(props: NavigationElementProps) {
    return <li className="nav-li">
        <a href={props.link}>{props.title}</a>
    </li>
}