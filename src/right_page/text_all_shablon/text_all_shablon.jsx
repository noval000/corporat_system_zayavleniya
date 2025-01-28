import React from 'react';
import './text_all_shablon.css';

const TextAllShablon = (props) => {

    const style_input_text = {
        width: '100%',
        border: 'none',
        fontSize: '12px',
        textIndent: '2em',
        lineHeight: '16px',
        whiteSpace: 'pre-wrap'
    }



    return (
        <div>
            <textarea rows="5" cols="50" style={style_input_text} value={props.text} onChange={(e) => {

            }}/>
        </div>
    );
};

export default TextAllShablon;