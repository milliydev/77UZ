import './style.css'
import { setupCounter } from './counter.js'
import { Input } from './public/Components/Input/Input.js'
document.querySelector('#app').innerHTML = `
  
  
`
setupCounter(document.querySelector('#counter'))
Input();