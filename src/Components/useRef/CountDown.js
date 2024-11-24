import React from "react";

function CountDown() {
    const [count, setCount] = React.useState(60);

    const ref = React.useRef();

    React.useEffect(() => {
        ref.previous = count;
    }, [count]);

    const handleStart = () => {
        ref.current = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000);
    }

    const handleStop = () => {
        clearInterval(ref.current);
    }

    console.log(count, ref.previous)

    return (
        <div className="container">
            <h1>{count}</h1>
            <button className="btn btn-primary" onClick={handleStart}>Start</button>
            <button className="btn btn-danger" onClick={handleStop}>Stop</button>
        </div>
    )
}

export default CountDown;