import './App.css';
import { Component } from 'react';
// import Counter from './components/Counter';

class App extends Component {
  state = { isLoggedIn: true }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        <h1>Hello World</h1>
        {/* {isLoggedIn ? <button>Logout</button> : <button>Login</button>} */}
        {isLoggedIn ? <button>Logout</button> : null}
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