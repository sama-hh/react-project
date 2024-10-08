import './App.css'
import Blog from './Blog.tsx'
import Profile from "./Profile.tsx";

function App() {
    const authors: string[] = ["Mariya", "Sama"];

    return (
        <>
            <Blog title={"Economy"}/>
            <Blog title={"Politics"}/>
            <Blog title={"Culture"}/>
            <Profile authors={authors}/>
        </>
    )
}

export default App
