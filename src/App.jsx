import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Layout from "./layouts/Layout.jsx";
import About from "./pages/About/About.jsx";
import Resume from "./pages/Resume/Resume.jsx";
import Education from "./pages/Education/Education.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/resume" element={<Resume/>}/>
                <Route path="/education" element={<Education/>}/>
            </Route>
        </Routes>
    )
}

export default App
