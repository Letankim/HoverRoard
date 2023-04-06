const container = document.querySelector('.container'),
    inputNumberSquare = document.querySelector('.number_square'),
    btnChangeShape = document.querySelector('.btn.btn_change');
let numberSquare = 324;
// button event change shape
inputNumberSquare.addEventListener('keydown',(e)=> {
    if(e.keyCode == 13) {
        changeNumberShape();
    }
})
btnChangeShape.addEventListener('click', ()=> {
    changeNumberShape();
})
// set up number of shape by value default or user
function handle() {
    for(var i = 0; i < numberSquare; i++) {
        let square = document.createElement('span');
        square.setAttribute('class', 'square');
        container.appendChild(square);
        square.addEventListener('click', (event)=> {
            let color = randomColor();
            event.currentTarget.style.backgroundColor = `${color}`;
            event.currentTarget.style.boxShadow = `0 0 3px ${color}, 0 0 3px ${color}`;
        });
        square.addEventListener('dblclick', (event)=> {
            event.currentTarget.style.backgroundColor = '#333';
            event.currentTarget.style.boxShadow = '0 0 3px #000';
        });
    }    
}
//  check input user if ok will change, otherwise alert a error
function changeNumberShape() {
    if(isNaN(inputNumberSquare.value) || inputNumberSquare.value <= 0) {
        alert("Please enter a positive number");
    } else {
        numberSquare = inputNumberSquare.value;
        var allSquare = container.querySelectorAll('.square');
        allSquare.forEach((item)=> {
            item.remove();
        });
        let typeShape = document.querySelector('input[name="shape"]:checked').value;
        if(typeShape == 'circle') {
            container.classList.add('circle');
        } else if(container.classList.contains('circle')) {
            container.classList.remove('circle');
        }
        handle();
    }
}

window.addEventListener('load', ()=> {
    handle();
});

//  random color follow rgb() color
function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

//  show and hide menu config
const btnOpenConfig = document.querySelector('.open_config'),
      btnCloseConfig = document.querySelector('.close'),
      menuConfig = document.querySelector('.box_input');
btnOpenConfig.addEventListener('click', (e)=>{
    menuConfig.style.transform = 'translateX(0%)';
});

btnCloseConfig.addEventListener('click', (e)=>{
    menuConfig.style.transform = 'translate(-110%)';
})