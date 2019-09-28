let arr = [
    [0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0,],
]
let counterOfRows = 0,
counterOfCells = 0;
for(let row of arr) {
    let line = document.createElement('div')
    line.classList.add('row')
    document.body.appendChild(line)
    counterOfRows++
    for(let cell of row) {
        cell = document.createElement('div');
        cell.classList.add('cell')
        if(counterOfRows % 2 == 1 && counterOfCells % 2 == 1) {
            cell.style.background = 'black';
        } else if(counterOfRows % 2 == 0 && counterOfCells % 2 == 0) {
            cell.style.background = 'black';
        }
        line.appendChild(cell);
        counterOfCells++
    }
}