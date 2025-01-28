import React from 'react';
import './one_components__left.css';
import {useDispatch} from "react-redux";

const OneComponentsLeft = (props) => {


    const dispatch = useDispatch();


    return (
        <>
            <div className="one_components__left" onClick={(e) => {
                dispatch({type: 'header_shablon__one'})
            }}>
                Шапка 1
            </div>
            <div className="one_components__left" onClick={() => {
                dispatch({type: 'header_shablon__two'})
            }}>
                Шапка 2
            </div>
            <div className="one_components__left" onClick={() => {
                dispatch({type: 'header_shablon__two'})
            }}>
                Шапка 2
            </div>
            <div className="one_components__left" onClick={() => {
                dispatch({type: 'header_shablon__two'})
            }}>
                Шапка 2
            </div>
            <div className="one_components__left" onClick={() => {
                dispatch({type: 'header_shablon__two'})
            }}>
                Шапка 2
            </div>
        </>
    );
};

export default OneComponentsLeft;