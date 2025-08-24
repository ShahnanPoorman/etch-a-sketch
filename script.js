const container = document.querySelector('#container')


for(let i = 0; i < 256; i++){
    const newDiv = document.createElement("div");

    newDiv.style.flex = '1 0 6.25%';
    newDiv.style.backgroundColor = '';
    newDiv.style.border = '.5px solid lightgrey';

    newDiv.addEventListener('mouseover', (e) => {
        e.target.classList.toggle('sketched');
    })

    container.appendChild(newDiv);
}

function makeGrid(squares = 16){
    container.innerHTML=''
    for (let i = 0; i < squares*squares; i++) {
        const newDiv = document.createElement("div");

        newDiv.style.flex = `1 0 ${100/squares}%`;
        newDiv.style.backgroundColor = '';
        newDiv.style.border = '.5px solid lightgrey';

        newDiv.addEventListener('mouseover', (e) => {
            e.target.classList.toggle('sketched');
        })

        container.appendChild(newDiv);
    }

}

const butt = document.querySelector('#new-grid');
butt.addEventListener("click", () => {
    let dimensions = prompt('New grid squares per side? e.g. \'16\' ');
    (dimensions) ? makeGrid(dimensions) : makeGrid();

})

