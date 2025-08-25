const container = document.querySelector('#container')
const grid_stats = document.querySelector('#grid-size');
const butt = document.querySelector('#new-grid');
const reset = document.querySelector('#reset');
const clear = document.querySelector('#clear');

window.addEventListener('load', () => makeGrid());
reset.addEventListener('click', () => makeGrid());

butt.addEventListener("click", () => {
    let dimensions = prompt('New grid squares per side?(max 100) e.g. \'16\' ');
    (dimensions) ? makeGrid(dimensions) : makeGrid();

})

clear.addEventListener('click', () => {

    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.classList.remove("sketched"))
})

function makeGrid(squares = 16){
    container.innerHTML='';
    (squares > 100) ? (squares = 100) : null;
    (squares < 1) ? (squares = 16) : null;

    for (let i = 0; i < squares*squares; i++) {
        const newDiv = document.createElement("div");

        newDiv.style.flex = `1 0 ${100/squares}%`;
        newDiv.style.backgroundColor = '';
        newDiv.style.border = '.5px solid lightgrey';
        newDiv.setAttribute("class", "box");

        newDiv.addEventListener('mouseover', (e) => {
            e.target.classList.toggle('sketched');
        })
        grid_stats.innerHTML=(squares + " x " + squares);
        container.appendChild(newDiv);
    }

}
