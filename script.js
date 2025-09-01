const container = document.querySelector(".container");

function handleHover(cell) {
    console.log(cell.style.opacity);
    if (cell.classList.contains("hovered")) {
        let [_, color] = cell.style.backgroundColor.split("(");
        [color, _] = color.split(")");
        const [r, g, b, opacity] = color.split(",");
        cell.style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${parseFloat(opacity) + 0.1})`;

    } else {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        cell.style.backgroundColor = `rgb(${r}, ${g}, ${b}, 0.1)`;
        cell.classList.add("hovered");
    }
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
