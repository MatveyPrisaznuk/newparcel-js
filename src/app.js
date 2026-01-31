// import add from "./js/calculator"
// console.log(add(2, 3));



// import {calculator, math} from "./js/calculator"
// console.log(calculator(2, 3));
// console.log(math(3, 6));



// import add from "./js/calculator"
// console.log(add);
// console.log(add.calculator(3, 3));
// console.log(add.math(3, 3));


// import * as add from "./js/calculator"
// console.log(add.calculator(2, 7));
// console.log(add.math(3, 7));

// import { nanoid } from 'nanoid'
// console.log(nanoid(15));



import games from "./games.json"
import { renderitems } from "./js/render";
const btnRef = document.querySelector(".btn")
const listRef = document.querySelector(".list")
btnRef.addEventListener("click", () => {
    renderitems(games, listRef)
})