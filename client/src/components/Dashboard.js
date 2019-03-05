import React from 'react';

const Dashboard = (props) => {
    <div>
        <button onClick={props.recordStrike}>Strike</button>
        <button onClick={props.recordBall}>Ball</button>
        <button onClick={props.recordFoul}>Foul</button>   
        <button onClick={props.recordHit}>Hit</button>
    </div>
}

export default Dashboard