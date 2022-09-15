export function renderMountain(mountain) {
    const li = document.createElement('li');
    li.classList.add('mountain-item');

    const headerEl = document.createElement('h2');
    headerEl.textContent = mountain.name;

    const pEl = document.createElement('p');
    pEl.textContent = mountain.chain + ', ' + mountain.location;

    li.append(headerEl, pEl);

    return li;
}
