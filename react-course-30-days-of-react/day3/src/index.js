import React from "react";
import ReactDOM from "react-dom";

import css_logo from './images/css_logo.png'
import html_logo from './images/html_logo.png'
import javascript_logo from './images/javascript_logo.png'
import react_logo from './images/react_logo.png'
import photo from './images/asabeneh.jpg'

const root = document.querySelector('#root')
// Part 1
const main = {
    textAlign: 'center',
    backgroundColor: '#F0F1F7',
    padding: '25px'
}
const title1 = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px'
}
const imagesWrapper = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
}

const imagesStyle = {
    width: '200px'
}

const imageField = (
    <div style={main}>
        <h1 style={title1}>Front End Technologies</h1>
        <div style={imagesWrapper}>
            <img style={imagesStyle} src={html_logo} alt='html logo' />
            <img style={imagesStyle} src={css_logo} alt='css logo' />
            <img style={imagesStyle} src={javascript_logo} alt='javascript logo' />
            <img style={imagesStyle} src={react_logo} alt='react logo' />
        </div>
    </div>
)

// Part 2
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

const formField = (
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
const profile = (
    
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
const app = (
    <section>
        {imageField}
        {formField}
        {profile}
    </section>
)

ReactDOM.render(app, root)