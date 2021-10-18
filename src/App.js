import { Route } from 'react-router';
import './App.scss';
import GameOver from './GameOver';
import Main from './Main';
import Menu from './Menu';
import Win from './Win';

function App() {
    return (
        <div className="app">
            <Route exact path={["/", "/menu"]} render={() => <Menu />} />
            <Route path='/main' render={() => <Main />} />
            <Route path='/win' render={() => <Win />} />
            <Route path='/gameOver' render={() => <GameOver />} />
        </div>
    );
}

export default App;
