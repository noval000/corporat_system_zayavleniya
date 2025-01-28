import React, {useState} from 'react';
import OneComponentsLeft from "./left_page/one_components__left";
import './left_menu.css';
import TwoComponentsLeft from "./left_page/two_components__left/two_components__left";
import BtnBehindOneComponents from "../block_components_ui/btnBehindOne/btnBehindOneComponents";
import BtnNext from "../block_components_ui/btnNext/btnNext";
import BtnNext2 from "../block_components_ui/btnNext2/btnNext2";
import BtnBehindOneComponents2 from "../block_components_ui/btnBehindOne2/btnBehindOneComponents2";
import ThreeComponentsLeft from "./left_page/three_components__left/three_components__left";

const LeftMenu = () => {

    const [showZagolovok, setShowZagolovok] = useState(false) //   меняем первые два блока
    const [showNextList, setshowNextList] = useState(false)   //  меняем третий блок



    return (
        <div className="all_components__left">
            {
                showZagolovok === false &&
                showNextList === false &&
                <div className="style_all_components__left">
                    <BtnNext setShowZagolovok={setShowZagolovok} showZagolovok={showZagolovok} />
                    <OneComponentsLeft />
                </div>
            }
            {
                showZagolovok === true &&
                showNextList === false &&
                <>
                    <BtnBehindOneComponents setShowZagolovok={setShowZagolovok} showZagolovok={showZagolovok} />
                    <TwoComponentsLeft />
                    <BtnNext2 setshowNextList={setshowNextList} showNextList={showNextList} />
                </>
            }
            {
                showZagolovok === true &&
                showNextList === true &&
                <>
                    <BtnBehindOneComponents2
                        setshowNextList={setshowNextList} showNextList={showNextList} />
                    <ThreeComponentsLeft />
                </>
            }
        </div>
    );
};

export default LeftMenu;