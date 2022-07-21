function createGrid(sizeX, sizeY) {
    
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    
    for (let i = 0; i < sizeY; i++) {
        for (let j = 0; j < sizeX; j++) {
            gridContainer.appendChild(document.createElement('div'));
        }  
    }

    for(let i = 0; i < gridContainer.children.length; i++) {
        let child = gridContainer.children[i];
        child.classList.add('grid-item');
        child.style.width = `calc(100%/${sizeX})`;
        child.style.height = `calc(100%/${sizeY})`;
    }

    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => item.classList.add('item-hovered'))
    })
}

const xSlider = document.getElementById('sizeX');
const ySlider = document.getElementById('sizeY');

xSlider.addEventListener('input',  () => {
    document.getElementById('x-value').innerText = "X: " + xSlider.value;
    createGrid(xSlider.value, ySlider.value);
})
ySlider.addEventListener('input',  () => {
    document.getElementById('y-value').innerText = "Y: " + ySlider.value;
    createGrid(xSlider.value, ySlider.value);
})

const gridContainer = document.getElementById("grid-container");
createGrid(xSlider.value, ySlider.value);


const restartButton = document.getElementById('restart');
restartButton.addEventListener('click', () => {
    xSlider.value = 16;
    document.getElementById('x-value').innerText = "X: " + xSlider.value;
    
    ySlider.value = 16;
    document.getElementById('y-value').innerText = "Y: " + ySlider.value;
    
    createGrid(xSlider.value, ySlider.value);
});