
const Controller = ({ handleSetCount }) => {
    return (
        <div className="Viewer">
            <button onClick = {() => handleSetCount(+1)}>+</button>
        </div>
    )
};


export default Controller;
