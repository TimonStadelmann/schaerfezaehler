import React from "react";
import {createRoot} from "react-dom/client";
import Counter from "./components/counter/counter"

const App = () => {
    return (
        <div>
            <h1>Döner</h1>
            <Counter />
        </div>
    );
};

createRoot(document.getElementById("root")).render(<App/>);