// reference: https://reactjs.org/docs/components-and-props.html
import React from 'react'
import { createRoot } from 'react-dom/client';
const Numbers = ({ numbers }) => {
    // modifying array to array of li JSX
    const list = numbers.map((number) => <li key={number}>{number}</li>)
    return list
}


// Skill Component
const Skill = ({ skill: [tech, level] }) => {
    return <li >{tech} {level}</li>
}

// Skills Component
const Skills = ({ skills }) => {
    const skillsList = skills.map((skill) => <Skill  key={skill[0]} skill={skill} />)
    console.log(skillsList)
    return <ul>{skillsList}</ul>
}

// Country component
const Country = ({ country: { name, city } }) => {
    return (
        <div>
            <h1>{name}</h1>
            <small>{city}</small>
        </div>
    )
}

// countries component
const Countries = ({ countries }) => {
    const countryList = countries.map((country) => <Country country={country} key={country.name} />)
    return <div>{countryList}</div>
  }

const App = () => {
    const skills = [
        ['HTML', 10],
        ['CSS', 7],
        ['JavaScript', 9],
        ['React', 8],
    ]
    const countries = [
        { name: 'Finland', city: 'Helsinki' },
        { name: 'Sweden', city: 'Stockholm' },
        { name: 'Denmark', city: 'Copenhagen' },
        { name: 'Norway', city: 'Oslo' },
        { name: 'Iceland', city: 'Reykjavík' },
    ]

    return (
        <div className="app">
            <h1>Hello world</h1>
            <div>
                <h1>Numbers List</h1>
                <ul>
                    <Numbers numbers={[1, 2, 3, 4, 5]} />
                </ul>
                <Skills skills={skills} />
                <Countries countries={countries} />
            </div>
        </div>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)