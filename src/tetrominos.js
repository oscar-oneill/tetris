export const TETROMINOS = {
    0: { 
        shape: [
            [0]
        ], 
        color: '0, 0, 0',
    },

    I: { 
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],

        color: '20, 201, 112',
    },

    J: { 
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0],
        ],

        color: '55, 18, 251',
    },

    L: { 
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L'],
        ],

        color: '211, 35, 74',
    },

    O: { 
        shape: [
            ['O', 'O'],
            ['O', 'O'],
        ],

        color: '223, 217, 36',
    },

    S: { 
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0],
        ],

        color: '229, 151, 18',
    },
    
    T: { 
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0],
        ],

        color: '16, 174, 213',
    },

    Z: { 
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0],
        ],

        color: '130, 89, 227',
    },
}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randomizer = tetrominos[Math.floor(Math.random() * tetrominos.length)];

    return TETROMINOS[randomizer];
}