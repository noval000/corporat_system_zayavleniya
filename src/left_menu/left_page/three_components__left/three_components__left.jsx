import React from 'react';
import './three_components__left.css';
import {useDispatch} from "react-redux";

const ThreeComponentsLeft = (props) => {

    const dispatch = useDispatch();

    return (
        <>
            <div className="one_components__left" onClick={() => {
                dispatch({type:'text_shablon__one'})
            }}>
                Текст 1
            </div>
            <div className="one_components__left" onClick={() => {
                dispatch({type:'text_shablon__two'})
            }}>
                Текст 2
            </div>
        </>
    );
};

export default ThreeComponentsLeft;