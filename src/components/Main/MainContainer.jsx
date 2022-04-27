import { connect } from "react-redux"
import { setValueActionCreator, startGame } from '../../store/reducer'
import Main from "./Main"

const mapStateToProps = state => {
    return {
        matrix: state.main.matrix.start,
        valuesData: state.main.values,
        errors: state.main.errors,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setValueActionCreator(value, indexArr) {
            let action = setValueActionCreator(value, indexArr);
            dispatch(action);
        },
        startGame() {
            dispatch(startGame());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
// export default connect(mapStateToProps, {setValueActionCreator, startGame})(Main)