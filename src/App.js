import './App.css';
import LeftMenu from "./left_menu/left_menu";
import PageAllShablon from "./right_page/page_all_shablon/page_all_shablon";

function App() {
  return (
    <div className="App">
        <div className="wrapper_left__menu">
            <LeftMenu />
        </div>
        <div className="wrapper_right__shablon">
            <PageAllShablon />
        </div>
    </div>
  );
}

export default App;
