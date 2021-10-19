import { Route } from 'react-router';
import './App.scss';
import GameOver from './components/GameOver';
import Main from './components/Main';
import Menu from './components/Menu';
import Win from './components/Win';

function App(props) {
    return (
        <div className="app">
            <Route exact path={["/", "/menu"]} render={() => <Menu />} />
            <Route path='/main' render={() => {
                return <Main matrix={props.matrix} valuesData={props.valuesData} errors={props.errors} dispatch={props.dispatch} />
            }} />
            <Route path='/win' render={() => <Win />} />
            <Route path='/gameOver' render={() => <GameOver />} />
        </div>
    );
}

export default App;