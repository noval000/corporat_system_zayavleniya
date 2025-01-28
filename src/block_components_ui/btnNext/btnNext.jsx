import React from 'react';
import './btnNext.css';

const BtnNext = (props) => {
    return (
        <div className="btnNext">
            <button onClick={() => {
                props.setShowZagolovok(!props.showZagolovok)
            }}>Далее</button>
        </div>
    );
};

export default BtnNext;