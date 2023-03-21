const STEP = 36
let robotLeft = 1
let robotRight = 10


function render(){
gameMap.innerHTML = `<div class="robot"

 style="transform:translateX(${robotLeft * STEP}px)">

 </div>`
}
render()

function render(){
    gameMap.innerHTML = `<div class="robot"
    
     style="transform:translateX(${robotRight * STEP}px)">
    
     </div>`
    }
    render()