import { nanoid } from 'nanoid';
import Copy from 'clipboard-copy';
import './style.css'

const passwordBts = document.querySelector('button')
const displayPasswordEl = document.querySelector('h2')

passwordBts.addEventListener('click', () =>{
    const randomPassword = nanoid()
    displayPasswordEl.innerHTML = randomPassword
})
displayPasswordEl.addEventListener('click', (event) => {
    Copy(event.target.innerHTML);
    alert('Senha copiada!');
  });
