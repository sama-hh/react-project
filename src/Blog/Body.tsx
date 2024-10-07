import BodyEntryProps from "./Body/Entry/BodyEntryProps.tsx";
import Entry from "./Body/Entry.tsx";

export default function Body() {
    const blogEntries: BodyEntryProps[] = [
        {
            title: 'First entry',
            id: 'first-entry',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores atque culpa doloribus eaque id illum inventore maiores neque nesciunt nobis, optio placeat porro rem repellat, ullam vitae. Ad, nulla.'
        },
        {
            title: 'Second entry',
            id: 'second-entry',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores atque culpa doloribus eaque id illum inventore maiores neque nesciunt nobis, optio placeat porro rem repellat, ullam vitae. Ad, nulla.'
        },
        {
            title: 'Third entry',
            id: 'third-entry',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores atque culpa doloribus eaque id illum inventore maiores neque nesciunt nobis, optio placeat porro rem repellat, ullam vitae. Ad, nulla.'
        },
    ];
    return <div className="blog-body">
        {blogEntries.map((entry) => Entry(entry))}
    </div>
}