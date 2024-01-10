const Controller = ({ handelSetCount }) => {
    return(
        <div>
            <button onClick={() => handelSetCount(-1)}>-1</button>
            <button onClick={() => handelSetCount(-10)}>-10</button>
            <button onClick={() => handelSetCount(-100)}>-100</button>
            <button onClick={() => handelSetCount(+100)}>+100</button>
            <button onClick={() => handelSetCount(+10)}>+10</button>
            <button onClick={() => handelSetCount(+1)}>+1</button>
        </div>
    );
};

export default Controller;
