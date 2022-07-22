let squares = document.querySelector('.squares');
let size = document.querySelector('#myRange');
let sizeNumber = document.querySelector('.size-number');
let colourSelector = document.querySelector('#colour-selector');
let custom = document.querySelector('#custom');
let rainbow = document.querySelector('#rainbow');
let clear = document.querySelector('#clear');
let root = document.querySelector(':root');
let value = 16;
let selectedColour = 'black';
let rainbowColour = false;
let mouseDown = false;
let prev=1;

//Slider adjustment for size
if (size.addEventListener) {
    size.addEventListener("mousemove", slider, false);
}
else if (size.attachEvent) {
    size.attachEvent('mousemove', slider);
}


function slider(e) {
    value = e.target.value;
    if (value !== sizeNumber.textContent) {
        sizeNumber.textContent = value;

        squares.replaceChildren();
        grid(value)
    }
}

function colourSquare() {
    if (mouseDown == true) {
        if (prev != 1)
            prev.addEventListener("mousemove", colourSquare);
        if (rainbowColour == false) {
            this.style.backgroundColor = selectedColour;
        } else {
            prev = this;
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            console.log(randomColor);
            this.style.backgroundColor = "#" + randomColor;
        }
        if (prev != 1)
        prev.removeEventListener("mousemove", colourSquare);
    }
}

function grid(value) {
    for (let i=0; i<value; i++) {
        let row = document.createElement('div');
        squares.appendChild(row);
        row.classList.add('row');
        row.style.width = `${100/value}%`;
        row.style.height = '100%';
        for (let j=0; j<value; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
            square.style.width = '100%';
            square.style.height = `${100/value}%`;
            // square.addEventListener('mousemove', function() {
            //     square.style.setProperty('--hoverColor', selectedColour);
            // })
            square.addEventListener('mousedown', function(){
                mouseDown = true;
            });
            square.addEventListener("mousemove", colourSquare);
            square.addEventListener("mouseup", function(){
                mouseDown = false;
            });
            square.addEventListener('dragstart', (e) => {
                e.preventDefault()
            })
            
            square.addEventListener('drop', (e) => {
                e.preventDefault()
            })
        }
    }
}



grid(value);
custom.addEventListener('click', (e)=>{
    rainbowColour = false;
    selectedColour = colourSelector.value;
})
colourSelector.addEventListener('change', (e)=>{
    rainbowColour = false;
    selectedColour = colourSelector.value;
    root.style.setProperty('--hoverColor', selectedColour);
})
black.addEventListener('click', (e)=>{
    rainbowColour = false;
    selectedColour = '#000000';
})
rainbow.addEventListener('click', (e)=>{
    rainbowColour = true;
})
clear.addEventListener('click', (e)=>{
    squares.replaceChildren();
    grid(value);
})
