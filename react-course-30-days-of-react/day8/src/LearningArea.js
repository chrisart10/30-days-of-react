// index.js
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  // declaring state
  state = {
    count: 1,
  }

  // method wich add one to the state
  addOne = () => {
    this.setState({count: this.state.count + 1})
  }
  removeOne = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    // accessing the state value
    const count = this.state.count
    return (
      <div className='App'>
        <h1>{count} </h1>

        <button onClick={this.addOne}>
          Add One
        </button>
        <button onClick={this.removeOne}>
          remove One
        </button>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)