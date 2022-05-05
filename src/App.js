import { Route, Routes } from 'react-router-dom';
import './App.scss';
import GameOver from './GameOver';
import Main from './Main';
import Menu from './Menu';
import Win from './Win';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/menu" element={<Menu />} />
                <Route path='/main' element={<Main />} />
                <Route path='/win' element={<Win />} />
                <Route path='/gameOver' element={<GameOver />} />
            </Routes>
        </div>
    );
}

export default App;
