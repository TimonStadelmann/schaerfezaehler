import React from "react";
import {createRoot} from "react-dom/client";

import Counter from "./components/counter/counter";
import Input from "./components/input/input";

const App = () => {
    return (
        <div>
            <h1>Counter Döner</h1>
            <Counter start={5} end={10} />
            <h1>Input</h1>
            <Input/>
        </div>
    );
};

createRoot(document.getElementById("root")).render(<App/>);