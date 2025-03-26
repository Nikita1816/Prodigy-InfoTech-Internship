// Function to create the Sudoku board dynamically
function createBoard() {
    let table = document.getElementById("sudoku-board");
    for (let i = 0; i < 9; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 9; j++) {
            let cell = document.createElement("td");
            let input = document.createElement("input");
            input.type = "text";
            input.maxLength = 1;
            input.id = `cell-${i}-${j}`;
            input.oninput = () => validateInput(input);
            cell.appendChild(input);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

// Function to validate input (only numbers 1-9 allowed)
function validateInput(input) {
    let value = input.value;
    if (!/^[1-9]?$/.test(value)) {
        input.value = "";
    }
}

// Function to solve Sudoku using Backtracking
function solveSudoku() {
    let board = [];
    for (let i = 0; i < 9; i++) {
        board[i] = [];
        for (let j = 0; j < 9; j++) {
            let value = document.getElementById(`cell-${i}-${j}`).value;
            board[i][j] = value ? parseInt(value) : 0;
        }
    }

    if (solve(board)) {
        updateBoard(board);
    } else {
        alert("No solution exists!");
    }
}

// Backtracking Algorithm
function solve(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        if (solve(board)) return true;
                        board[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

// Function to check if a number can be placed in a cell
function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num || board[i][col] === num) return false;
    }

    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[startRow + i][startCol + j] === num) return false;
        }
    }
    return true;
}

// Function to update the board with solved values
function updateBoard(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            document.getElementById(`cell-${i}-${j}`).value = board[i][j];
        }
    }
}

// Function to clear the board
function clearBoard() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            document.getElementById(`cell-${i}-${j}`).value = "";
        }
    }
}

window.onload = createBoard;
