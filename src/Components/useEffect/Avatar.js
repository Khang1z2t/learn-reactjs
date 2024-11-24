import React from "react";

function Avatar() {
    const [avatar, setAvatar] = React.useState();

    React.useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar]);

    const handleFile = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
        e.target.value = null;
    }
    return (
        <div className="container">
            <input type="file"
                   onChange={handleFile}
            />
            {avatar && (
                <img src={avatar.preview}
                     alt="avatar"
                     className="rounded-full w-[200px] h-[200px]"
                     // style={{width: "200px", height: "200px"}}
                />
            )}
        </div>
    )
}

export default Avatar;