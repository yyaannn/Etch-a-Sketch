const container = document.querySelector(".container");

function handleHover(cell) {
    cell.classList.add("hovered");
}

function createGrid(squareNumPerSide) {
    container.innerHTML = "";

    for (let i = 0; i < squareNumPerSide; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < squareNumPerSide; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseover", () => handleHover(cell));
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

createGrid(100);

const button = document.querySelector("button");

function createNewGrid() {
    let squareNumPerSide = parseInt(prompt("Enter number of squares per side"));

    while (isNaN(squareNumPerSide)) {
        squareNumPerSide = parseInt(prompt("Enter number of squares per side"));
    }

    squareNumPerSide = (squareNumPerSide > 100) ? 100 : squareNumPerSide; 
    squareNumPerSide = (squareNumPerSide <= 0) ? 1 : squareNumPerSide; 

    createGrid(squareNumPerSide);
}

button.addEventListener("click", createNewGrid);
