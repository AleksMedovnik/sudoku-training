import { NavLink } from "react-router-dom";

const GameOver = () => {
    return (
        <div className='container'>
            <h1 className='title'>Game Over</h1>
            <NavLink to='/main' className='link-start'>Play Again</NavLink>
        </div>
    );
}
export default GameOver;