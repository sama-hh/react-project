import BodyEntryProps from "./Entry/BodyEntryProps.tsx";

export default function Entry(props: BodyEntryProps) {
    return <div className="blog-entry" id={props.id}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
}