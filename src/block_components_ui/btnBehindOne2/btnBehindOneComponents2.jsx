import React from 'react';
import './btnBehindOne.css';

const BtnBehindOneComponents = (props) => {
    return (
        <div className="btnBehindOne">
            <button onClick={() => {
                props.setShowZagolovok(!props.showZagolovok)
                props.setshowNextList(!props.showNextList)
            }}>Назад</button>
        </div>
    );
};

export default BtnBehindOneComponents;