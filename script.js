const render = () => {
    const wrapperElement = document.querySelector('.wrapper');
    for (i = 0; i < 8; i++) {
        const rowElement = document.createElement('div');
        rowElement.classList.add(`row`);
        wrapperElement.appendChild(rowElement);
        for (j = 0; j < 8; j++) {
            const divElement = document.createElement('div');
            divElement.classList.add(`block`);
            divElement.setAttribute('data-x', i);
            divElement.setAttribute('data-y', j);
            divElement.innerText = `(${i},${j})`;
            rowElement.appendChild(divElement);
        }

    }
    resetColors();
}
const resetColors = () => {
    document.querySelectorAll('div.block').forEach(block => {
        let { x, y } = block.dataset;
        block.className = (`block ${(parseInt(x) + parseInt(y)) % 2 != 0 ? 'black' : 'white'}`);
    })
}
const highLightFor = (x, y) => {
    // document.querySelectorAll(`.block[data-x="${x}"][data-y="${y}"]`).forEach(block => {})
    //reset colors
    resetColors();
    for (let i = x, j = y; i < 8 && j < 8; i++, j++) {
        document.querySelector(`.block[data-x="${i}"][data-y="${j}"]`).classList.add('highlight');
    }
    for (let i = x, j = y; i >= 0 && j >= 0; i--, j--) {
        document.querySelector(`.block[data-x="${i}"][data-y="${j}"]`).classList.add('highlight');
    }
    for (let i = x, j = y; i < 8 && j >= 0; i++, j--) {
        document.querySelector(`.block[data-x="${i}"][data-y="${j}"]`).classList.add('highlight');
    }
    for (let i = x, j = y; i >= 0 && j < 8; i--, j++) {
        document.querySelector(`.block[data-x="${i}"][data-y="${j}"]`).classList.add('highlight');
    }
}
const addEventsToHover = () => {
    document.querySelectorAll('.block').forEach(block => {
        block.addEventListener('mouseover', (event) => {
            let { x, y } = event.target.dataset;
            highLightFor(x, y);
        })
    })
}
render();
addEventsToHover();