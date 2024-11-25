import Video from "./Videos/Video";
import {useRef} from "react";

function AppImperativeHandle() {

    const videoRef = useRef()

    return (
        <div className={'flex flex-col items-center'}>
            <Video ref={videoRef}/>
            <button className={'btn btn-primary'} onClick={() => videoRef.current.play()}>Play</button>
            <button className={'btn btn-danger'} onClick={() => videoRef.current.pause()}>Pause</button>
        </div>
    )
}

export default AppImperativeHandle;