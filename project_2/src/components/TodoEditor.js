import "./TodoEditor.css";
import { useContext, useRef, useState} from "react";
import {TodoDispatchContext} from "../App";

const TodoEditor = ({ mockTodo }) => {
    const { onCreate } = useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const inputRef = useRef();
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }
    const onSubmit = () => {
        if(!content) {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };
    const onKeyDown = (e) => {
        if(e.keyCode === 13){
            onSubmit();
        }
    }
    return (
        <div className="TodoEditor">
            <div className="editor_wrapper">
                <input
                    ref={inputRef}
                    value={content}
                    onChange={onChangeContent}
                    onKeyDown={onKeyDown}
                    placeholder="새로운 Todo..."/>
                <button onClick={onSubmit}>+</button>
            </div>
        </div>
    );
};

export default TodoEditor;
