const data = {
    chooseMatrix() {
        return Math.floor(Math.random() * this.dataMatrix.length);
    },
    dataMatrix: [
        [
            [
                [1, 2, 3, 5, 4, 6],
                [6, 5, 4, 3, 1, 2],
                [2, 6, 1, 4, 5, 3],
                [4, 3, 5, 6, 2, 1],
                [3, 4, 2, 1, 6, 5],
                [5, 1, 6, 2, 3, 4]
            ],
            [
                [0, 2, 3, 0, 4, 6],
                [0, 5, 4, 3, 1, 2],
                [2, 6, 1, 0, 0, 0],
                [0, 3, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0],
                [5, 0, 0, 0, 0, 4]
            ]
        ],
        [
            [
                [4, 6, 3, 1, 2, 5],
                [1, 2, 5, 3, 4, 6],
                [5, 1, 6, 4, 3, 2],
                [2, 3, 4, 5, 6, 1],
                [6, 4, 1, 2, 5, 3],
                [3, 5, 2, 6, 1, 4]
            ],
            [
                [0, 0, 0, 1, 2, 0],
                [1, 2, 5, 0, 4, 0],
                [0, 0, 0, 4, 3, 2],
                [0, 0, 4, 0, 0, 0],
                [0, 4, 1, 2, 5, 3],
                [3, 0, 0, 0, 0, 0]
            ]
        ],
        [
            [
                [2, 1, 5, 3, 4, 6],
                [6, 4, 3, 1, 2, 5],
                [1, 3, 2, 5, 6, 4],
                [5, 6, 4, 2, 1, 3],
                [4, 5, 1, 6, 3, 2],
                [3, 2, 6, 4, 5, 1]
            ],
            [
                [2, 0, 5, 3, 4, 0],
                [0, 4, 3, 0, 0, 0],
                [0, 3, 0, 0, 6, 0],
                [5, 6, 0, 2, 0, 0],
                [4, 5, 1, 0, 0, 0],
                [0, 2, 0, 0, 0, 1]
            ]
        ],
    ],
}

const randomOptionShoose = (data) => {
    const randomData = data.chooseMatrix();
    return {
        matrix: {
            start: JSON.parse(JSON.stringify(data.dataMatrix[randomData][1])),
            end: JSON.parse(JSON.stringify(data.dataMatrix[randomData][0])),
        },
        values: [1, 2, 3, 4, 5, 6],
        errors: 0,
    }
}

const store = {
    _state: randomOptionShoose(data),

    getState() {
        return this._state;
    },

    _callSubscriber() { // пока функция-пустышка
        console.log('');
    },

    subscribe(observer) {
        this._callSubscriber = observer; // пустышку переприсваиваем в другую функцию 
    },
}

export default store;