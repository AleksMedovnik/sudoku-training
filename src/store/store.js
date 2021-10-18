const store = {

    _state: {
        matrix: [
            [1, 0, 3, 5, 0, 6],
            [6, 5, 4, 3, 1, 0],
            [2, 0, 1, 0, 5, 3],
            [4, 3, 5, 6, 2, 1],
            [3, 4, 0, 1, 0, 5],
            [5, 1, 6, 2, 3, 0]
        ],
        valuesData: [1, 2, 3, 4, 5, 6],
        errors: 0,
    },

    getState() {
        return this._state;
    },

}

export default store;