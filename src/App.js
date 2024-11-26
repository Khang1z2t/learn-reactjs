import {Routes, Route, Link} from 'react-router';
import HomePage from './Pages/Home';
import NewsPage from './Pages/News';
import ContactPage from './Pages/Contact';

function App() {
    return (
        <div>
            <nav className={"flex"}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/news" element={<NewsPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
            </Routes>
        </div>
    )
}

export default App;