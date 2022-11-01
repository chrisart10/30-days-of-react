import React from 'react'
import { createRoot } from 'react-dom/client';
// reference: https://reactjs.org/docs/components-and-props.html

const showDate = (time) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
}

// Header Component
const Header = (props) => {
    console.log(props)
    const data = props.data
    const {
        welcome,
        title,
        subtitle,
        author: { firstName, lastName },
        date,
    } = data

    return (
        <header>
            <div className='header-wrapper'>
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>
                    {firstName} {lastName}
                </p>
                <small>{showDate(date)}</small>
            </div>
        </header>
    )
}

// Skills Component
const Skills = (props) => {
    // modifying the skills array
    console.log(props)
    const skillList = props.skills.map((skill) => <li key={skill}>{skill}</li>)
    console.log(skillList)
    return <ul>{skillList}</ul>
}

// A button component

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// The App, or the parent or the container component

// Functional Component
const App = () => {
    const data = {
        welcome: 'Welcome to 30 Days Of React',
        title: 'Getting Started React',
        subtitle: 'JavaScript Library',
        author: {
            firstName: 'Asabeneh',
            lastName: 'Yetayeh',
        },
        date: new Date(),
    }
    // Functional Component
    const sayHi = () => {
        alert('Hi')
    }
    return (<div className='app'>
        <Header data={data} />
        <h2>Web dev tools:</h2>
        <Skills skills={['HTML', 'CSS', 'JavaScript']} />
        <Button text='Say Hi' onClick={sayHi} />
        <Button text='Show Time' onClick={() => alert(new Date())} />
    </div>)
}
const root = createRoot(document.getElementById('root'))
root.render(<App />)