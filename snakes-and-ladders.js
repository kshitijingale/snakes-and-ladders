const snakesAndLadders = (names) => { //names is a array of player names

    // Is valid input
    if (!names || names.length < 2) {
        return console.error("Invalid input: Number of players should be 2 or more")
    }

    const players = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        players.push({
            id: i + 1,
            name: name,
            position: 1
        })
    }

    // Representation of board
    const board = Array(101).fill(0)

    let currentPlayerIndex = 0; // player pointer

    // First player
    let currentPlayer = players[currentPlayerIndex];

    const updateCurrentPlayer = () => {
        // Looping through players turn by turn
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        currentPlayer = players[currentPlayerIndex]
    }

    const updateBoardStatus = () => {
        board[0] = `${currentPlayer}'s turn` // first element of the array represent the status of the game
    }

    updateBoardStatus();

    // Representation of snakes and ladders
    const snakesAndLaddersCase = {
        // Snakes
        37: 3,
        28: 10,
        48: 16,
        75: 32,
        94: 71,
        96: 42,
        // Ladders
        4: 56,
        12: 50,
        14: 55,
        22: 58,
        41: 79,
        54: 88
    }

    const rollDie = () => {
        return Math.floor(Math.random() * 6) + 1
    }

    const playTurn = (player, index) => {
        const roll = rollDie();

        players[index].position += roll;
        let playerCurrentPosition = players[index].position;

        // Checking for snakes and ladders
        if (snakesAndLaddersCase[playerCurrentPosition]) {
            players[index].position = snakesAndLaddersCase[playerCurrentPosition];
            playerCurrentPosition = players[index].position;
            console.log(`${player} landed on a snake/ladder. ${player} moves to position ${playerCurrentPosition}.`);
        }

        // If you roll too high, your piece "bounces" off the last square and moves back.
        if (playerCurrentPosition > 100) {
            players[index].position = 100 - (playerCurrentPosition - 100);
            playerCurrentPosition = players[index].position;
        }

        // Win condition
        if (playerCurrentPosition === 100) {
            console.log(`${player} wins!`);
            board[0] = `${player} won!`;
        }

        // Extra turn
        if (roll === 6) {
            playTurn(player, index)
        }
    }

    return (player) => {
        // Check if valid player
        if (player !== currentPlayer.name) {
            return console.log(`Invalid Move: It's ${currentPlayer}'s turn`);
        }

        // Get the index of the player
        const index = players.findIndex(x => x.name == player)

        // Moving along the board
        playTurn(player, index)

        updateCurrentPlayer()
        updateBoardStatus();
        return players; // returns an array of players name and their positions
    }
}

const play = snakesAndLadders(['x', 'y', 'z']);