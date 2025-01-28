import React from 'react';
import './two_components__left.css';
import {useDispatch} from "react-redux";

const TwoComponentsLeft = () => {

    const dispatch = useDispatch();

    return (
            <>
                <div className="one_components__left"  onClick={() => {
                    dispatch({type: 'title_shablon__one'})
                }}>
                    Заявление 2
                </div>
                <div className="one_components__left" onClick={() => {
                    dispatch({type: 'title_shablon__two'})
                }}>
                    Другой шаблон
                </div>
            </>
    );
};

export default TwoComponentsLeft;