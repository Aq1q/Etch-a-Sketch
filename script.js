
const sizeButton = document.getElementById('size-prompt')

sizeButton.addEventListener('click', () => {
    let size = window.prompt("Type size: (default: 16 max: 64)")
    size = Number(size);
    if (typeof size != "number" || size == 0 ){
        size = 16;
    } else if (size > 64) {
        size = 64;
    }
    createGrid(size);
}
)


const gridContainer = document.getElementById("grid-container");

function createGrid(size) {
    
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            gridContainer.appendChild(document.createElement('div'));
        }  
    }
    for(let i = 0; i < gridContainer.children.length; i++) {
        let child = gridContainer.children[i];
        child.classList.add('grid-item');
        child.style.width = `calc(100%/${size})`;
        child.style.height = `calc(100%/${size})`;
    }
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => item.classList.add('item-hovered'))
    })
}

