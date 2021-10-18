import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div className='container'>
            <h1 className='title'>Sudoku</h1>
            <NavLink to='/main' className='link-start'>Start Game</NavLink>
        </div>
    );
}
export default Menu;