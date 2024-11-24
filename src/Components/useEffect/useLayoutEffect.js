import React from "react";

function useLayoutEffect() {
    const [count, setCount] = React.useState(0);

    React.useLayoutEffect(() => {
        if (count > 5) {
            setCount(0);
        }
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div className="container">
            <h1>{count}</h1>
            <button className="btn btn-primary" onClick={handleClick}>Increase</button>
        </div>
    )
}

export default useLayoutEffect;