const container = document.querySelector('#container')


for(let i = 0; i < 256; i++){
    const newDiv = document.createElement("div");
    newDiv.style.height = '50px';
    newDiv.style.width = '50px';
    newDiv.style.display = 'inline-block';
    newDiv.style.backgroundColor = '';
    newDiv.style.border = '.5px solid lightgrey';

    newDiv.addEventListener('mouseover', (e) => {
        e.target.classList.toggle('sketched');
    })

    container.appendChild(newDiv);
}

