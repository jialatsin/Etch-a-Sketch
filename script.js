let squares = document.querySelector('.squares');
let size = document.querySelector('#myRange');
let sizeNumber = document.querySelector('.size-number');
if (size.addEventListener) {
    size.addEventListener("mousemove", testtest, false);
}
else if (size.attachEvent) {
    size.attachEvent('change', testtest);
}
function testtest(e) {
    var value = e.target.value;
    sizeNumber.textContent = value;
}

let mouseDown = false;

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

        square.addEventListener('mousedown', function(){
            square.style.backgroundColor = 'black';
            mouseDown = true;
        });
        square.addEventListener("mousemove", function() {
            if (mouseDown == true) {
                square.style.backgroundColor = 'black';
            }
        });
        square.addEventListener("mouseup", function(){
            mouseDown = false;
        })
    }
}
