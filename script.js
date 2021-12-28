const colors = {
    "blue":"white",
    "white":"green",
    "green":"red",
    "red":"yellow",
    "yellow":"orange",
    "orange":"blue"
}
const tileElments = [...document.getElementsByClassName("tile")]
const tiles = tileElments.map(function(te){ return {element: te, color: "blue"}})
tileElments.forEach(elem => elem.addEventListener("click",changeTileColor))

function changeTileColor(event){
    const tile = tiles.find(tile => tile.element == event.target)
    tile.color = colors[tile.color]
    tile.element.style.backgroundColor = tile.color
}

