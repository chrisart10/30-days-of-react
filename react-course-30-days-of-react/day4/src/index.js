import React from "react";
import ReactDOM from "react-dom";
import css_logo from './images/css_logo.png'
import html_logo from './images/html_logo.png'
import javascript_logo from './images/javascript_logo.png'
import react_logo from './images/react_logo.png'
import photo from './images/asabeneh.jpg'

// Exercise 1

const Button = () => (
    <button type="submit">Submit</button>
)

const InputField = () => (
    <div className="input-name">
        <label htmlFor="userName">
            User Name:
        </label>
        <input type="text" name="userName" id="userName" />
    </div>
)

const AlertBox = (message, type) => (
    <div className={`alert-box ${type}`}>
        <p>{message}</p>
    </div>
)

const Exercise1 = () => (
    <div className="card-ex1">
        <h1>Exercise 1</h1>
        <form>
            <InputField />
            <Button />
            {AlertBox('Everthin is ok!', 'success')}
            {AlertBox('Something rare happened', 'fail')}
        </form>
    </div>
)

// Exercise 2 part 1

const Exercise2Part1 = () => (
    <div className="card-ex2">
        <h1 className="title-ex2">Front End Technologies</h1>
        <div className="img-wrapper-ex2">
            <img className="img-ex2" src={html_logo} alt='html logo' />
            <img className="img-ex2" src={css_logo} alt='css logo' />
            <img className="img-ex2" src={javascript_logo} alt='javascript logo' />
            <img className="img-ex2" src={react_logo} alt='react logo' />
        </div>
    </div>
)

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

const title2 = {
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
const Exercise2Part2 = () => (
    <div style={formWrapper}>
        <form>
            <div style={itemsWrapper}>
                <h2 style={title2}>
                    SUBSCRIBE
                </h2>
                <p style={pStyle}>
                    Sign up with your email address to recieve news and updates
                </p>
                <div style={inputContainer}>
                    <input type='text' placeholder="First name" style={inputStyle} />
                    <input type='text' placeholder="Last name" style={inputStyle} />
                    <input type='email' placeholder="Email" style={inputStyle} />
                </div>
                <button type="submit" style={buttonStyle}>Subscibe</button>
            </div>
        </form>
    </div>
)
// Exercise 3 part 1
// Hexadecimal color generator

const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }

const HexaColor = () => {
    const pickedColor = hexaColor();
    const hexacolorStyle = {
        padding:'20px',
        textAlign:'center',
        backgroundColor: pickedColor,
        marginBottom:'2px',
        borderRadius:'3px'
      }    
    return (<div style={hexacolorStyle}>{pickedColor}</div>)
}

const Exercise3Part1 =  () => (
    <div className="ex3-p1-card">
        <HexaColor/>
        <HexaColor/>
        <HexaColor/>
        <HexaColor/>
        <HexaColor/>
    </div>
)

// Exercise 3 part 2
const photoStyle = {
    borderRadius: '100%',
    width:'200px'
}

const nameStyle = {
    fontWeight: '550'
}

const title3 = {
    fontWeight:'550',
    fontSize: '16px'
}

const ulStyle = {
    margin:'0'
}

const profileWrapper = {
    padding:'25px',
    backgroundColor:'#F0F1F7'
}
const profileStyle = {
    backgroundColor:'#ffff',
    borderRadius:'5px',
    padding:'15px',
    lineHeight:'40px'
}

const Exercise3Part2 = ()=>(
    
    <div style={profileWrapper}>
        <div style={profileStyle}>
            <img src={photo}alt="asabeneh" style={photoStyle}/>
            <p style={nameStyle}>ASABENEH YETAYEH <i>check icon</i></p>
            <p>Senior Developer, Finland</p>
            <h2 style={title3}>SKILLS</h2>
            <ul style={ulStyle}>
                <li>HTML</li>
                <li>CSS</li>
                <li>Sass</li>
                <li>JS</li>
                <li>React</li>
                <li>Redux</li>
                <li>Node</li>
                <li>MongoDB</li>
                <li>Python</li>
                <li>Flask</li>
                <li>Django</li>
                <li>Numpy</li>
                <li>Pandas</li>
                <li>Data Analysis</li>
                <li>MYSQL</li>
                <li>GraphQL</li>
                <li>D3.js</li>
                <li>Gatsby</li>
                <li>Docker</li>
                <li>Heroku</li>
                <li>Git</li>
            </ul>
            <div>
                <p><i>reloj icon</i> Joined on Aug 30, 2020</p>
            </div>
        </div>
    </div>
)

// bowl
const App = () => (
    <div className="app">
        <Exercise1 />
        <Exercise2Part1/>
        <Exercise2Part2/>
        <Exercise3Part1/>
        <Exercise3Part2/>
    </div>
)
const root = document.getElementById('root');
ReactDOM.render(<App />, root);