import React, {useState, useEffect} from "react";

const Counter = ({start, end}) => {
    const [count, setCounter] = useState(start);

    // useEffect(() => {

    // }, []);

    return (
        <div>
            <div>Anzahl Scharf: {count}</div>
            <button onClick={() => setCounter(count + (count < end ? 1 : 0))}>Add Scharf</button>
        </div>
    );
}

export default Counter;