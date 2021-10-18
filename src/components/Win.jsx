import { NavLink } from "react-router-dom";

const Win = () => {
    return (
        <div className='container'>
            <h1 className='title'>You Win!!!</h1>
            <NavLink to='/main' className='link-start'>Play Again</NavLink>
        </div>
    );
}
export default Win;