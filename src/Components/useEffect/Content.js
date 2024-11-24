// 1. useFffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào dom
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps)
// - Gọi callback mỗi khi deps thay đổi

// -----------------------------------------------
// Call back luôn chạy sau khi component mounted
// Clean up function chạy trước khi component unmounted
// Clean up function chạy trước khi callback chạy lần tiếp theo
import React, {useEffect} from "react";


const tabs = ['posts', 'comments', 'albums']

function Content() {
    const [title, setTitle] = React.useState('')
    const [posts, setPosts] = React.useState([]);
    const [type, setType] = React.useState(tabs[0]);
    const [goToTop, setGoToTop] = React.useState(false);
    const [width, setWidth] = React.useState(window.innerWidth);
    const [countDown, setCountDown] = React.useState(3008);

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type]);

    React.useEffect(() => {
        const handleScroll = () => {
            setGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)

        // Clean up function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown((prev) => prev - 1)
        }, 100)

        return () => {
            clearInterval(interval)
        }
    }, []);

    return (
        <div>
            <h1>Count Down: {countDown}</h1>
            <h1>Width: {width}</h1>
            {tabs.map(tab => (
                <button className="btn btn-primary"
                        style={type === tab ? {
                            backgroundColor: '#333',
                            color: '#fff'
                        } : {}}
                        onClick={() => setType(tab)}
                        key={tab}>{tab}</button>
            ))}
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <ul className="list-item">
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {goToTop && (
                <button onClick={() => window.scrollTo(0, 0)}
                        className="scroll-to-top fixed bottom-4 right-4
                       bg-gray-800 text-white rounded-full
                       transition duration-300 hover:bg-gray-700
                       hover:text-gray-200">
                    <img src=
                             "https://media.geeksforgeeks.org/wp-content/uploads/20240227155250/up.png"
                         className="w-16 h-16 rounded-full bg-white" alt=""/>
                </button>
            )}
        </div>
    )
}

export default Content;