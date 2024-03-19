import { useState } from "react";

export const Home = () => {

    const age = 15;
    const isGreen = true;

    const [showText, setShowText] = useState(true);
    const [textColor, setTextColor] = useState("black");

    return (
        <div className="App">
            {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
            <h1 style={{ color: isGreen ? "green" : "red" }}>This has color</h1>

            {isGreen && <button>THIS IS A BUTTON</button>}

            <button onClick={() => {
                setShowText(!showText);
            }}>
                Show/ Hide
            </button>
            {showText && <h1>HI MY NAME IS LEVAN</h1>}

            <h1 style={{ color: textColor }}>This color will be changed</h1>

            <button
                onClick={() => {
                    setTextColor(textColor === "black" ? "red" : "black");
                }}
            >
                Change color
            </button>
        </div>
    );
}