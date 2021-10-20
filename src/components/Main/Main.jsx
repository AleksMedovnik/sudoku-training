import { useEffect, useState } from "react";
import { withRouter } from "react-router";

const Main = (props) => {

    const isWin = () => {
        for (let arr of props.matrix) {
            if (arr.includes(0)) return;
        }
        props.startGame();
        props.history.push('/win');
    }
    const isOver = () => {
        if (props.errors >= 3) {
            props.startGame();
            props.history.push('/gameOver');
        }
    }
    useEffect(() => {
        isOver();
        isWin();
        window.onpopstate = () => props.startGame();
    }, [props.matrix, props.errors]);

    const setValue = (e) => {
        props.setValueActionCreator(e.target.dataset.value, indexArr);
    };

    const [indexArr, newIndexArr] = useState([0, 0]);

    const setActiveInput = (a, b) => {
        newIndexArr([a, b]);
    }

    const tbody = props.matrix.map((tr, trIndex) => {
        return (
            <tr key={`_${trIndex}`}>{tr.map((td, index) => {
                return (
                    <td key={`_${trIndex}_${index}`} onClick={() => setActiveInput(trIndex, index)}  className={(trIndex === indexArr[0] && index === indexArr[1]) ? 'td active-cell' : 'td'}>
                        {td || ''}
                    </td>
                )
            })}
            </tr>
        )
    });

    const values = props.valuesData.map(i => <li key={i} data-value={i} onClick={setValue}>{i}</li>);
    

    return (
        <div className='container'>
            <table className='table'>
                <tbody>
                    {tbody}
                </tbody>
            </table>
            <ul className='values'>
                {values}
            </ul>
            <div className='errors'>Errors: {props.errors} / 3</div>
        </div>
    );
}
export default withRouter(Main);