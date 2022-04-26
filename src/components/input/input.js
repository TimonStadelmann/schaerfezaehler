import React, {useRef, useEffect} from "react";

const Input = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        console.log(inputRef.current.value);
    });

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    );
}

export default Input;