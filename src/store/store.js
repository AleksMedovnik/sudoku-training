import { reducer } from "./reducer";

const store = {
    _state: reducer(),

    getState() {
        return this._state;
    },

    _callSubscriber() { // пока функция-пустышка
        console.log('');
    },

    subscribe(observer) {
        this._callSubscriber = observer; // пустышку переприсваиваем в другую функцию 
    },
    
    dispatch(action) {
        this._state = reducer(this._state, action);
    },
}

export default store;