
const Controller = ({ handleSetCont }) => {
    return (
        <div className="Viewer">
            <button onClick = {() => handleSetCont(+1)}>+</button>
        </div>
    );
};


export default Controller;
