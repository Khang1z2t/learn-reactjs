import {Routes, Route, Link} from 'react-router';
import HomePage from './Pages/Home';
import NewsPage from './Pages/News';
import ContactPage from './Pages/Contact';
import clsx from "clsx";

function App() {
    return (
        <>
            <nav>
                <ul className={clsx("flex")}>
                    <li className={'mr-2'}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={'mr-2'}>
                        <Link to="/news">News</Link>
                    </li>
                    <li className={'mr-2'}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className={'container'}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/news" element={<NewsPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App;