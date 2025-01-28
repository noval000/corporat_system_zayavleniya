import HeaderTextShablon from "../block_components_ui/header_text__shablon/header_text__shablon";
import HeaderTextShablon2 from "../block_components_ui/header_text__shablon2/header_text__shablon2";
import TitlePageShabloonOne from "../right_page/title_page_shabloon/title_page_shabloon_one";
import TextAllShablon from "../right_page/text_all_shablon/text_all_shablon";

const initialStateHeaderTextZayavlenie = {
    componentsHeaderTextOne: '',
    title:'',
    text:''
};

const rootReducer = (state = initialStateHeaderTextZayavlenie, action) => {
    switch (action.type) {
        case 'header_shablon__one':
            return {
                ...state,
                componentsHeaderTextOne: <HeaderTextShablon />,
            };
        case 'header_shablon__two':
            return {
                ...state,
                componentsHeaderTextOne: <HeaderTextShablon2 />,
            };
        case 'title_shablon__one':
            return {
                ...state,
                title: <TitlePageShabloonOne title={'«Внести изменение в график работы»'}/>,
            };
        case 'title_shablon__two':
            return {
                ...state,
                title: <TitlePageShabloonOne title={'«Внести изменение в график работ2ы»'}/>,
            };
        case 'text_shablon__one':
            return {
                ...state,
                text: <TextAllShablon text={`В связи с тем, что (укажите причину), прошу изменить график работы и/или режим рабочего времени, прошу оплатить пропорционально отработанному времени, а именно: `}/>,
            };
        case 'text_shablon__two':
            return {
                ...state,
                text: <TextAllShablon text={'В связи с тем, что (укажите причину), прошу изменить график работы и/или режим рабочего времени, а именно: '}/>
            };
        default:
            return state;
    }
};

export default rootReducer;