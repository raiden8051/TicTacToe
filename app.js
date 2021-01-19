$(document).ready(function() {
    var count = 0
    const tile = $('.tile')
    const turn = $('h3')
    tile.on("click",function(){
        const currentTile = $(this)
        if(currentTile.text()===''){
            if(count%2===0){
                currentTile.css('background-color','#48C9B0')
                currentTile.text('X')
                turn.text('O Turn')
            }
            else{
                currentTile.css('background-color','#3498DB')
                currentTile.text('O')
                turn.text('X Turn')
            }
            count++
        }
    })
})