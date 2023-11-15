import { pageList } from "../pages/PageList";
import '../css/MenuBar.css';
import MenuButton from "./MenuButton";

const MenuBar = () => {
  return (
    <>
    <div className="MenuBar">
      <div className="MenuContainer">
        {pageList.map(e => MenuButton(e))}
      </div>
    </div>
    </>
  )
}

export default MenuBar;