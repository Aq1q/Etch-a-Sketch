
const gridContainer = document.getElementById("grid-container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        gridContainer.appendChild(document.createElement('div'));
    }  
}

let classList = 'classList' in gridContainer;

for(let i = 0; i < gridContainer.children.length; i++) {
    let child = gridContainer.children[i];
    child.classList.add('grid-item');
}



const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    item.addEventListener('mouseover', () => item.classList.add('item-hovered'))
})