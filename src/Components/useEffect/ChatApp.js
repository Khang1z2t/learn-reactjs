import React from "react";

const lessons = [
    {
        id: 1,
        title: "ReactJS là gì"
    },
    {
        id: 2,
        title: "Spring Boot là gì"
    },
    {
        id: 3,
        title: "ReactJS và Spring Boot"
    }
]

function ChatApp() {
    const [lessonId, setLessonId] = React.useState(1);

    React.useEffect(() => {
        const handleComment = (e) => {
            console.log(e.detail)
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId]);

    return (
        <div className="container">
            <h1>Chat App</h1>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            cursor: 'pointer',
                            color: lessonId === lesson.id ? 'red' : 'black'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default React.memo(ChatApp);