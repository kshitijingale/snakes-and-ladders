# Snakes and Ladders

1. Start the game.
2. Game will have 2 or more players.
3. Get the players.
4. Create the board.
5. Every player starts with position 1.
6. Players play turn by turn.
7. Player gets an extra turn if they roll 6.
8. Position of the player changes if they land on a snake or a ladder.
9. Game continues till somebody wins.

## Approach

- Board is represented by an array of 101 elements. First element represents the status of the game. Index 1 to 100 represents 100 positions on the board.
- Every turn requires player name to check if it's a valid player's turn for not.
- The program maintaines an a array of players which include their names, ids and positions to track the game.
