import {forwardRef, useImperativeHandle, useRef} from "react";
import video from './video.mp4';


function Video(ref) {
    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play: () => {
            videoRef.current.play()
        },
        pause: () => {
            videoRef.current.pause()
        }
    }))
    
    return (
        <video
            ref={videoRef}
            className={'w-[300]'}
            src={video}
        />
    )
}

export default forwardRef(Video);