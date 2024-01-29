import './App.css';
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import React, {useRef, useReducer, useCallback, useMemo} from "react";
// import TestComp from "./components/TestComp";
export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

const mockTodo = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        createdDate: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "알바하기",
        createdDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "베이스 연습하기",
        createdDate: new Date().getTime(),
    },
];

function reducer(state, action){
    switch (action.type) {
        case "CREATE" : {
            return [action.newItem, ...state];
        }

        case "UPDATE" : {
            return state.map((it) =>
            it.id === action.targetId
            ? {
                ...it,
                isDone: !it.isDone,
                }
                :it
            );
        }

        case "DELETE" :{
            return state.filter((it) => it.id !== action.targetId);
        }

        default :{
            return state;
        }
    }
}

function App() {

    const [todo, dispatch] = useReducer(reducer, mockTodo);
    const idRef = useRef(3);
    const onCreate = (content) => {
        dispatch({
            type: "CREATE",
            newItem: {
            id: idRef.current,
            content,
            isDone: false,
            createDate: new Date().getTime()}
        });
        idRef.current += 1;
    };

    const onUpdate = useCallback((targetId) => {
        dispatch({
            type: "UPDATE",
            targetId,
        });
}, []);
    const onDelete = useCallback((targetId) => {
        dispatch({
            type: "DELETE",
            targetId,
        });
    }, []);

    const memoizeDispatches = useMemo( () => {
        return { onCreate, onUpdate, onDelete };
    }, []);

    return (
        <div className="App">
            {/*<TestComp/>*/}
            <Header />
            <TodoStateContext.Provider value={ todo }>
                <TodoDispatchContext.Provider value={memoizeDispatches}>
                    <TodoEditor />
                    <TodoList />
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
  );
}

export default App;
