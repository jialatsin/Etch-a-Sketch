let squares = document.querySelector('.squares');

for (let i=0; i<15; i++) {
    let row = document.createElement('div');
    squares.appendChild(row);
    row.classList.add('row');
    row.style.width = `${100/16}%`;
    row.style.height = '100%';
    for (let j=0; j<15; j++) {
        let square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
        square.style.width = '100%';
        square.style.height = `${100/16}%`;
        square.addEventListener('mouseover', function() {square.style.backgroundColor = 'black';}, false);
        square.addEventListener('mouseout', function() {square.style.backgroundColor = 'white';}, false);
    }
   
}

console.log(squares.offsetWidth)
