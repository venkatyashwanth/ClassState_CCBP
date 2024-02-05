import './App.css';
import { Component } from 'react';
// import Counter from './components/Counter';

class App extends Component {
  state = { isLoggedIn: true }

  renderAuthButton = () => {
    const { isLoggedIn } = this.state;
    if (isLoggedIn === true) {
      return <button>Logout</button>
    }
    return <button>Login</button>
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        {this.renderAuthButton()}
      </div>
    )
  }
}

// const App = () => {
//   return (
//     <>
//       <Counter/>
//     </>
//   )
// }
export default App 