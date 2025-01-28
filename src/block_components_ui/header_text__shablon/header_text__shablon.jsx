import React, {useState} from 'react';
import './header__text__shablon.css';
const HeaderTextShablon = () => {


    const [changeDolj, setChangeDoljn] = useState('Генеральному директору')
    const [changeCompany, setChangeCompany] = useState('ООО «Институт Репродуктивных Технологий»')
    const [changeNameDirector, setChangeNameDirector] = useState("Яковенко С.А.")
    const [changeNamePerson, setChangeNamePerson] = useState("")
    const [changeDoljPerson, setChangeDoljPerson] = useState("")
    const [changeOtdel, setChangeOtdel] = useState("ИТ отдел")

    return (
        <div className="header_name__organization">
            <div className="header_name_pismo">
                <div className="title_pismo__left">
                    <p>Заявление</p>
                    <span className="input_nomer">
                        <input type="text"/>
                        <p>№</p>
                        <input style={{width:'100px'}} type="text"/>
                    </span>
                    <p className="descPismo">Об изменении графика работы и (или) режима рабочего времени</p>
                </div>

            </div>
            <div className="header_text__right">
                <span className="one_string">
                    <input style={{width: '100%', height: '20px'}} type="text" value={changeDolj}
                           onChange={(e) => {
                               setChangeDoljn(e.target.value)
                           }}
                    />
                    <span className="desc">должность руководителя организации</span>
                </span>
                <span className="two_string">
                    <span style={{width: '100%'}}>
                        <input style={{width: '100%', height: '20px'}} type="text"
                               value={changeCompany}
                               onChange={(e) => {
                                   setChangeCompany(e.target.value)
                               }}
                        />
                    </span>
                    <span className="desc">наименование организации</span>
                </span>
                <span className="three_string">
                    <input style={{width: '100%', height: '20px'}} value={changeNameDirector}
                           onChange={(e) => {
                               setChangeNameDirector(e.target.value)
                           }}
                    />
                    <span className="desc">инициалы и фамилия руководителя</span>
                </span>
                <span className="thour_string">
                    <span className="nameUser" style={{width: '100%'}}>
                        от
                        <input style={{width: '100%', height: '20px'}} value={changeNamePerson}
                               onChange={(e) => {
                                   setChangeNamePerson(e.target.value)
                               }}
                        />
                    </span>
                    <span className="desc">фамилия, инициалы работника</span>
                </span>
                <span className="five_string">
                    <input style={{width: '100%', height: '20px'}} value={changeDoljPerson}
                           onChange={(e) => {
                               setChangeDoljPerson(e.target.value)
                           }}
                    />
                    <span className="desc">должность работника</span>
                </span>
                <span className="six_string">
                    <input style={{width: '100%', height: '20px'}} value={changeOtdel}
                           onChange={(e) => {
                               setChangeOtdel(e.target.value)
                           }}
                    />
                    <span className="desc">наименование структурного подразделения</span>
                </span>

            </div>
        </div>
    );
};

export default HeaderTextShablon;