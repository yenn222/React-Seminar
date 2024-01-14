import './App.css';
import React, { useState } from "react";
import Controller from "./components/Controller";
import Body from "./components/Body";


function App() {
    const [ count, setCount ] = useState(0);

    const handleSetCount = (value) => {
        const newCount = count + value;
        setCount(newCount);


        if (newCount > 0 && (newCount % 3 === 0)) {
            alert('빵!');
        }
    };

    return (
        <div className="App">
            <section>
                <Body count = {count} />
            </section>
            <section>
                <Controller handleSetCount = {handleSetCount} />
            </section>
        </div>
    );
};

export default App;
