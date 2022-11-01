// reference: https://reactjs.org/docs/components-and-props.html
import React from 'react'
import { createRoot } from 'react-dom/client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
// Data
// import { countriesData } from './data/countries'
import { tenHighestPopulations } from './data/ten_most_highest_populations'

function isPrime(number) {
    if (number <= 1) return false;
    if (number % 2 === 0 && number > 2) return false;

    // store the square to loop faster
    const s = Math.sqrt(number);
    for (let i = 3; i <= s; i += 2) {
        // modulo shows a divisor was found
        if (number % i === 0) return false;
    }
    return true;
}

const clasificator = (number) => {
    if (isPrime(number)) {
        return '#F25252'
    } else if (number % 2 === 0) {
        return '#24BF67'
    } else if (number % 2 === 1) {
        return '#FDDB3A'
    }
}



const appStyle = {
    display: 'Flex',
    flexDirection: 'column',
    alignItems: 'Center',
    background: '#F2F2F2',
    fontFamily: 'Aldrich, sans-serif',
    fontWeight: '580'
}

const grid = {
    display: 'grid',
    gridTemplate: 'repeat(4,100px) / repeat(8,100px)',
    gap: '2px',
}

function itemStyle(background) {
    this.display = 'flex'
    this.fontSize = '24px'
    this.background = background
    this.width = '100%'
    this.height = '100%'
    this.justifyContent = 'center'
    this.alignItems = 'center'
    this.color = 'white'
}

const NumbersGenerator = ({ numbersList }) => {
    const numbers = numbersList.map(number => {
        const item = new itemStyle(clasificator(number))
        return <div style={item} key={'Item ' + number}><p>{number}</p></div>
    })
    return (
        <div style={grid} >
            {numbers}
        </div>
    )
}

const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    return '#' + color
}


const HexadecimalColors = ({ colorsList }) => {
    const colors = colorsList.map(color => {
        const item = new itemStyle(hexaColor())
        item.fontSize = '16px'
        return <div style={item} key={'Item ' + color}><p>{color}</p></div>
    })

    return (
        <div style={grid} >
            {colors}
        </div>
    )
}

const App = () => {
    const numbers = [...Array(32).keys()]
    const colors = numbers.map((numbers) => hexaColor())
    console.log(numbers)
    console.log(colors)

    // note: it just take 5 digit in axis

    return (
        <div className="app" style={appStyle}>
            <h1>30 Days Of React</h1>
            <h2>Number Generator</h2>
            <NumbersGenerator numbersList={numbers} />
            <br></br>
            <h2>Hexadecimal Colors</h2>
            <HexadecimalColors colorsList={colors} />
            <br></br>
            <BarChart width={950} height={400} data={tenHighestPopulations} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis  type="number" allowDataOverflow='true'/>
                <YAxis type="category" dataKey="country" />
                <Tooltip />
                <Legend />
                <Bar dataKey="population" fill="#8884d8" />
            </BarChart>
            <br></br>
        </div>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)

