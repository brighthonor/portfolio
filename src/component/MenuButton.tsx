import '../css/MenuButton.css';

const MenuButton = (name: string) => {
  return (
    <>
    <div className="MenuButton" key={name}>{name}</div>
    </>
  );
}

export default MenuButton;