// TicTacToe

console.log('Hello world');

function whoHasWon(board) {
    let result = ""
  
    // if(board[0][0] == board[1][0] == board[2][0]){
    //     result = board[0][0]
    // }   
    for(let i = 0; i < board[0].length; i++){
        if(board[i][0] === board[i][1] === board[i][2]){
            result = board[i][0]
        } else 
    } 
    return result
}

const board = [
    [ x,x,x],
    [  , , ],
    [  , , ]
    
]

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let map = {}
    let arr = S.split('')
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1
        } else {
            return arr[i]
        }
    }
}