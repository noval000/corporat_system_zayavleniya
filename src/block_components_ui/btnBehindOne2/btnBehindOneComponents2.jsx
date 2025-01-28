import React from 'react';
import './btnBehindOne2.css';

const BtnBehindOneComponents2 = (props) => {
    return (
        <div className="btnBehindOne">
            <button onClick={() => {
                props.setshowNextList(!props.showNextList)
            }}>Назад</button>
        </div>
    );
};

export default BtnBehindOneComponents2;