/*
Manera Vanilla
const element = document.createElement('h1')
element.innerText = 'Hola React'
const container = document.getElementById('root')
container.appendChild(element)
*/

//Manera React
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

/*const user = {
    nombre: 'Oscar',
    apellido: 'Garcia',
    avatar: 'http://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'
}

const getName = (user) => `${user.nombre} ${user.apellido}`

const saludo = (user) =>{
    if(user){
        return <h1>Hello {getName(user)}</h1>
    }else{
        return <h1>Hello Stranger</h1>
    }
}

const element = (
    <div>
        <h1>{saludo(user)}</h1>
        <img src = {user.avatar}/>
    </div>
)
const container = document.getElementById('root')

ReactDOM.render(element,container)*/

const container = document.getElementById('root')
ReactDOM.render(<App/>, container)