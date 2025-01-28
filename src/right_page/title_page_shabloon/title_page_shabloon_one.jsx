import React from 'react';
import './title_page_shabloon_one.css';

const TitlePageShabloonOne = (props) => {
    return (
        <div className="input_date">
            {props.title}
            <div className="two_input_bottom__header">
                <input type="text"/>
                <input type="text"/>
            </div>
            <div className="input_date_number_all">
                <div className="date_number">
                    <p>"</p>
                    <input type="number"/>
                    <p>"</p>
                </div>
                <div className="date_months">
                    <input type="text"/>
                </div>
                <div className="date_years">
                    <p>20</p>
                    <input type="number"/>
                    <p>г.</p>
                </div>
            </div>
        </div>

    );
};

export default TitlePageShabloonOne;