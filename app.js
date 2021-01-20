$(document).ready(function() {
    var count = 0
    var movesArr = [0,0,0,0,0,0,0,0,0]
    const tile = $('.tile')
    const turn = $('h3')
    const result = $('h2')
    tile.on("click",function(){
        if(result.text()!=='')
            return
        const currentTile = $(this)
        const idClicked = currentTile.attr("id")
        if(currentTile.text()===''){
            if(count%2===0){
                updateArray(idClicked, 'X')
                currentTile.css('background-color','#48C9B0')
                currentTile.text('X')
                turn.text('O Turn')
                if(count!==0)
                    analyseResult('X')
            }
            else{
                updateArray(idClicked, 'O')
                currentTile.css('background-color','#3498DB')
                currentTile.text('O')
                turn.text('X Turn')
                analyseResult('O')
            }
            count++
        }
    })

    function analyseResult(user){
        if(movesArr[0]===user && movesArr[1]===user && movesArr[2]===user)
            result.text("User "+user+" Wins")
        else if(movesArr[3]===user && movesArr[4]===user && movesArr[5]===user)
            result.text("User "+user+" Wins")
        else if(movesArr[6]===user && movesArr[7]===user && movesArr[8]===user)
            result.text("User "+user+" Wins")
        else if(movesArr[2]===user && movesArr[5]===user && movesArr[8]===user)
            result.text("User "+user+" Wins")
        else if(movesArr[0]===user && movesArr[3]===user && movesArr[6]===user)
            result.text("User "+user+" Wins")
        else if(movesArr[1]===user && movesArr[4]===user && movesArr[7]===user)
            result.text("User "+user+" Wins")
        else if(movesArr[0]===user && movesArr[4]===user && movesArr[8]===user)
            result.text("User "+user+" Wins")
        else if(movesArr[2]===user && movesArr[4]===user && movesArr[6]===user)
            result.text("User "+user+" Wins")
    }
    function updateArray(id, value){
        movesArr[id-1] = value
    }
})