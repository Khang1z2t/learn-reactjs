import React from 'react';
import Content from "./Content";

function AppCallBack() {
    const [count, setCount] = React.useState(0);
    const [count2, setCount2] = React.useState(0);

    const handleIncrease = React.useCallback(() => {
        setCount(prev => prev + 1);
    }, [])

    return (
        <div className="container">
            <h1>AppCallBack</h1>
            <Content onIncrease={handleIncrease}/>
            <h1>{count}</h1>

        </div>
    )
}

export default AppCallBack;