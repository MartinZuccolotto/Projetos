import { nanoid } from "nanoid";

const passwordBtnEl = document.querySelector('button')
const displayPasswordEl = document.querySelector('h2')

passwordBtnEl.addEventListener('click', () => {
    const addNanoid = nanoid()
    displayPasswordEl.innerHTML = addNanoid
})