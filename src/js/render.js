export const renderitems = (array, element) => {
    const item = array.map(({images, name, rating, genre}) => {
        return `<li>
    <img src="${images}" alt="${name}">
    <h2>${name}</h2>
    <h3>${rating}</h3>
    <p>${genre}</p>
</li>`
    }).join("")
    element.innerHTML = item
}