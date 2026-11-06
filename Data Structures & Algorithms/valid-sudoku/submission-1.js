class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMap = new Map();
        const colMap = new Map();
        const squareMap = new Map();

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === ".") continue;
                const sqkey = `${Math.floor(i/3)},${Math.floor(j/3)}`
                if (
                    rowMap.get(i) && rowMap.get(i).has(board[i][j]) ||
                    colMap.get(j) && colMap.get(j).has(board[i][j]) ||
                    squareMap.get(sqkey) && squareMap.get(sqkey).has(board[i][j])
                ) {
                    return false;
                }

                rowMap.set(i,(rowMap.get(i) || new Set()).add(board[i][j]));
                colMap.set(j,(colMap.get(j) || new Set()).add(board[i][j]));
                squareMap.set(sqkey,(squareMap.get(sqkey) || new Set()).add(board[i][j]));
            }
        }

        return true;
    }
}
