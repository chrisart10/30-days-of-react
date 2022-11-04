// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const Header = () => (
  <div className="header-style">
    <h1>Seasons</h1>
  </div>
)
const Button = ({ changeSeason, text }) => {
  return (
    <button onClick={() => changeSeason(text)} >
      {text}
    </button>
  )
}

class Main extends React.Component {
  render() {
    const { season, seasonStyle, oldStyle } = this.props
    document.querySelector('body').classList.add(oldStyle)
    document.querySelector('body').classList.replace(oldStyle, seasonStyle)
    return (
      <p>
        {season}
      </p>
    )
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    season: 'Autumn',
    seasonStyle: 'autumn-style',
    oldStyle: 'autumn-style'
  }
  changeSeason = (season) => {
    const newSeason = (season === 'Autumn') ? 'autumn-style' :
      (season === 'Winter') ? 'winter-style' :
        (season === 'Spring') ? 'spring-style' :
          'summer-style'
    this.setState({ oldStyle: this.state.seasonStyle })
    this.setState({ season })
    this.setState({ seasonStyle: newSeason })
  }

  render() {
    return (
      <div className="main" >
        <Header />
        <Main
          season={this.state.season}
          seasonStyle={this.state.seasonStyle}
          oldStyle={this.state.oldStyle}
        />
        <Button
          changeSeason={this.changeSeason}
          text={'Autumn'}
        />
        <Button
          changeSeason={this.changeSeason}
          text={'Winter'}
        />
        <Button
          changeSeason={this.changeSeason}
          text={'Spring'}
        />
        <Button
          changeSeason={this.changeSeason}
          text={'Summer'}
        />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)