import { Route, Routes } from 'react-router-dom';
import './App.scss';
import GameOver from './components/GameOver';
import Main from './components/Main';
import Menu from './components/Menu';
import Win from './components/Win';

function App(props) {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/menu" element={<Menu />} />
                <Route path='/main' element={<Main matrix={props.matrix}
                    valuesData={props.valuesData}
                    errors={props.errors}
                    dispatch={props.dispatch} />} />
                <Route path='/win' element={<Win />} />
                <Route path='/gameOver' element={<GameOver />} />
            </Routes>
        </div>
    );
}

export default App;