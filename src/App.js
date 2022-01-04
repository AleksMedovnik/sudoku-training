import { Route, Routes } from 'react-router-dom';
import './App.scss';
import GameOver from './components/GameOver';
import MainContainer from './components/Main/MainContainer';
import Menu from './components/Menu';
import Win from './components/Win';

function App(props) {
    return (
        <div className="app">
            <Routes>
                <Route exact path="/" element={<Menu />} />
                <Route exact path="/menu" element={<Menu />} />
                <Route path='/main' element={<MainContainer />} />
                <Route path='/win' element={<Win />} />
                <Route path='/gameOver' element={<GameOver />} />
            </Routes>
        </div>
    );
}

export default App;