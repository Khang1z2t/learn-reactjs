import React from "react";

function Content({onIncrease}) {
    return (
        <>
            <h1>Content</h1>
            <button className="btn btn-primary" onClick={onIncrease}>Increase</button>
        </>
    )
}
// memo là Highter Order Component (HOC) giúp giảm bớt việc render lại component
export default React.memo(Content);