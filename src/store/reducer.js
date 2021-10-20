const SET_VALUE = 'SET-VALUE';
const START_GAME = 'START-GAME';

export const setValueActionCreator = (value, indexArr) => ({ type: SET_VALUE, value, indexArr });
export const startGame = () => ({ type: START_GAME })

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

const getInitialState = (data) => {
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

export const reducer = (state = getInitialState(data), action = startGame()) => {
    switch (action.type) {
        case SET_VALUE:
            let newState = {
                ...state,
                matrix: { ...state.matrix, start: [...state.matrix.start] }
            }
            let value = +action.value;
            if (state.matrix.end[action.indexArr[0]][action.indexArr[1]] === value) {
                newState.matrix.start[action.indexArr[0]][action.indexArr[1]] = value;
            } else {
                newState.errors++;
            }
            return newState;

        case START_GAME:
            return getInitialState(data);
    }
    return state;
}

