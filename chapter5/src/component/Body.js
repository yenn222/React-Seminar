import React, {useRef, useState} from "react";

function Body() {
    const [text, setText] = useState("");
    const [change, setChange] = useState("");
    const textRef = useRef();

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const handleOnClick = () => {
        if (text.length < 5) {
            textRef.current.focus();
            setChange("오류");

        } else {
            alert("통과!");
            setChange("");
            setText("");
        }
    };


    return (
        <div>
            <input ref={textRef} value={text} onChange={handleOnChange}/>
            <button onClick={handleOnClick}>작성완료</button>
            {change && (
                <div style={{ color: "red" }}>오류입니다</div>
            )}
        </div>
    );
}

export default Body;
