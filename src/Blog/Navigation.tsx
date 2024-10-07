import NavigationElementProps from "./Navigation/Element/NavigationElementProps.tsx";
import Element from "./Navigation/Element.tsx";

export default function Navigation() {
    const navigationElements: NavigationElementProps[] = [
        {
            title: 'First entry',
            link: '#first-entry'
        },
        {
            title: 'Second entry',
            link: '#second-entry'
        },
        {
            title: 'Third entry',
            link: '#third-entry'
        },
    ];
    return <div className="navigation">
        <h2>Navigation</h2>
        <nav className="navbar">
            <ul className="nav-ul">
                {navigationElements.map((props) => Element(props))}
            </ul>
        </nav>
    </div>
}