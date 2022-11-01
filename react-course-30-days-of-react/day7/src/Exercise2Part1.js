// reference: https://reactjs.org/docs/components-and-props.html
import React from 'react'
import { createRoot } from 'react-dom/client';
import css_logo from './images/css_logo.png'
import html_logo from './images/html_logo.png'
import javascript_logo from './images/javascript_logo.png'
import react_logo from './images/react_logo.png'
import photo from './images/asabeneh.jpg'


// Exercise 2 part 2
const cardFrontEndTechs = {
    textAlign: 'center',
    background: '#F0F1F7',
    padding: '25px'
}

const titleFrontEndTechs = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px'
}

const imgWrapperFrontEndTechs = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly'
}

const imgFrontEndTechs = {
    width: '200px'
}

class Img extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { imgs } = this.props
        const imgList = imgs.map((img) => <img src={img.src} alt={img.alt + ' logo'} style={imgFrontEndTechs} key={img.alt} />)
        return (
            <div style={imgWrapperFrontEndTechs}>
                {imgList}
            </div>
        )
    }
}

class FrontEndTechs extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { imgs } = this.props
        return (
            <div style={cardFrontEndTechs}>
                <h1 style={titleFrontEndTechs}>Front End Technologies</h1>
                <Img imgs={imgs} />
            </div>
        )
    }
}

// Exercise 2 part 2
const formWrapper = {
    padding: '25px',
    backgroundColor: '#F9F7F7'
}
const itemsWrapper = {
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    backgroundColor: '#C2E6F4',
    borderRadius: '5px'
}
const inputContainer = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-center'
}

const formTitle = {
    marginBottom: '30px',
    marginTop: '25px',
    fontWeight: '500'
}
const pStyle = {
    marginBottom: '30px',
    fontWeight: '500'
}

const inputStyle = {
    boxSizing: 'border-box',
    border: 'none',
    width: '200px',
    borderRadius: '5px',
    padding: '10px',
    marginLeft: '6px',
    color: 'black'
}

const buttonStyle = {
    boxSizing: 'border-box',
    border: 'none',
    borderRadius: '5px',
    width: '300px',
    margin: '25px 0',
    padding: '10px',
    backgroundColor: '#F27777',
    color: '#FFFFFF'
}

class Input extends React.Component {
    render() {
        return (
            <div style={inputContainer}>
                <input type='text' placeholder="First name" style={inputStyle} />
                <input type='text' placeholder="Last name" style={inputStyle} />
                <input type='email' placeholder="Email" style={inputStyle} />
            </div>
        )
    }
}

class SubscriberForm extends React.Component {
    render() {
        return (
            <div style={formWrapper}>
                <form>
                    <div style={itemsWrapper}>
                        <h2 style={formTitle}>
                            SUBSCRIBE
                        </h2>
                        <p style={pStyle}>
                            Sign up with your email address to recieve news and updates
                        </p>
                        <Input />
                        <button type="submit" style={buttonStyle}>Subscibe</button>
                    </div>
                </form>
            </div>
        )
    }
}

// Exercise 3 part 1
// Hexadecimal color generator

const ex3P1Card = {
    padding: '25px 0',
    margin: '25px'
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


function hexaColorStyle(hexColor) {
    this.padding = '20px'
    this.textAlign = 'center'
    this.backgroundColor = hexColor
    this.marginBottom = '2px'
    this.borderRadius = '3px'
}

class HexaColorCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { hexColors } = this.props
        hexColors = hexColors.map(hexColor => {
            const hcs = new hexaColorStyle(hexColor)
            return <div style={hcs} key={hexColor}>{hexColor}</div>
        })
        return (
            <div style={ex3P1Card}>
                {hexColors}
            </div>
        )
    }
}

// Exercise 3 part 2
const photoStyle = {
    borderRadius: '100%',
    width: '200px'
}

const nameStyle = {
    fontWeight: '550'
}

const title3 = {
    fontWeight: '550',
    fontSize: '16px'
}

const ulStyle = {
    margin: '0'
}

const profileWrapper = {
    padding: '25px',
    backgroundColor: '#F0F1F7'
}
const profileStyle = {
    backgroundColor: '#ffff',
    borderRadius: '5px',
    padding: '15px',
    lineHeight: '40px'
}

const liStyle = {
    listStyle: 'none',
    display: 'inline-block',
    padding: '0 8px',
    margin: '4px',
    backgroundColor: '#30D9C8',
    color: 'rgb(255, 255, 255)',
    fontWeight: '550',
    borderRadius: '5px'
}

class ListOfTechs extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { techs } = this.props
        techs = techs.map(tech => <li style={liStyle}>{tech}</li>)
        return (
            <ul style={ulStyle}>
                {techs}
            </ul>
        )
    }
}

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


class ProfesionalExperience extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { user: { userName, userSurName, location, role, techs } } = this.props
        return (
            < div style={profileWrapper} >
                <div style={profileStyle}>
                    <img src={photo} alt="asabeneh" style={photoStyle} />
                    <p style={nameStyle}>{userName} {userSurName} <i>check icon</i></p>
                    <p>{role}, {location}</p>
                    <h2 style={title3}>SKILLS</h2>
                    <ListOfTechs
                        techs={techs}
                    />
                    <div>
                        <p><i>reloj icon</i> Joined on {showDate(new Date())}</p>
                    </div>
                </div>
            </div >
        )
    }
}

// bowl
class App extends React.Component {
    render() {
        const user = {
            userName: 'ASABENEH',
            userSurName: 'YETAYEH',
            location: 'Finland',
            role: 'Senior Developer',
            techs: [
                'HTML',
                'CSS',
                'Sass',
                'JS',
                'React',
                'Redux',
                'Node',
                'MongoDB',
                'Python',
                'Flask',
                'Django',
                'Numpy',
                'Pandas',
                'Data Analysis',
                'MYSQL',
                'GraphQL',
                'D3.js',
                'Gatsby',
                'Docker',
                'Heroku',
                'Git'
            ]
        }
        const imgs = [
            {
                src: html_logo,
                alt: 'html',
            },
            {
                src: css_logo,
                alt: 'css',
            },
            {
                src: javascript_logo,
                alt: 'javscript',
            },
            {
                src: react_logo,
                alt: 'react',
            }
        ]

        return (
            <div className="app">
                <FrontEndTechs imgs={imgs} />
                <SubscriberForm />
                <HexaColorCard
                    hexColors={[
                        hexaColor(),
                        hexaColor(),
                        hexaColor(),
                        hexaColor(),
                        hexaColor(),
                    ]}
                />
                <ProfesionalExperience user={user} />
            </div>
        )
    }
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)