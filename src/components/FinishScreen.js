function FinishScreen({ points, maxPoints, dispatch, highscore }) {

    const percentage = (points / maxPoints) * 100;

    return (
        <>
            <p className="result">
                Your scored {points} out of {maxPoints} ({Math.ceil(percentage)}%)
            </p>
            <p className="highscore">
                (Highscore: {highscore} points)
            </p>
            <button className="btn btn-ui" onClick={() => dispatch({ type: "restart" })} >Restart</button>
        </>
    )
}

export default FinishScreen
