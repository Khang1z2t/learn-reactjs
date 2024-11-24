import Content from "./Content";
import React from "react";
import Avatar from "./Avatar";
import ChatApp from "./ChatApp";

function Mounted() {
    const [show, setShow] = React.useState(false);
    const [showAvatar, setShowAvata] = React.useState(false);
    const [showChat, setShowChat] = React.useState(false);


    return (
        <div className="container">
            <button className="btn btn-primary"
                    onClick={() => setShow(!show)}>Show
            </button>
            <button className="btn btn-info"
                    onClick={() => setShowAvata(!showAvatar)}>Show Avatar
            </button>
            <button className="btn btn-warning"
                    onClick={() => setShowChat(!showChat)}>Show Chat
            </button>
            {show && <Content/>}
            {showAvatar && <Avatar/>}
            {showChat && <ChatApp/>}
        </div>
    )
}

export default Mounted;