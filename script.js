const container = document.getElementById('gridContainer');
const button = document.getElementById('newGridButton');

function createGrid(size) {
    // Clear existing grid
    container.innerHTML = '';
    
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundColor = 'white';
        square.style.opacity = 1;

        square.addEventListener('mouseenter', () => {
            let currentOpacity = parseFloat(square.style.opacity);
            if (currentOpacity > 0) {
                square.style.opacity = (currentOpacity - 0.1).toString();
            }
            square.style.backgroundColor = getRandomColor();
        });

        container.appendChild(square);
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener('click', () => {
    let newSize = prompt("Enter the number of squares per side (max 100):");
    newSize = Math.min(Math.max(newSize, 1), 100); // Limit input between 1 and 100
    createGrid(newSize);
});

// Create the initial grid
createGrid(16);