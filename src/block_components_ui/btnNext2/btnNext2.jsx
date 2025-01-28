import React from 'react';
import './btnNext2.css';

const BtnNext2 = (props) => {
    return (
        <div className="btnNext">
            <button onClick={() => {
                props.setshowNextList(!props.showNextList)
            }}>Далее
            </button>
        </div>
    );
};

export default BtnNext2;