import { nanoid } from 'nanoid';

const passwordBts = document.querySelector('button')
const displayPasswordEl = document.querySelector('h2')

passwordBts.addEventListener('click', () =>{
    const randomPassword = nanoid()
    displayPasswordEl.innerHTML = randomPassword
})