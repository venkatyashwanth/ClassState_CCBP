import './App.css';
import { Component } from 'react';
// import Counter from './components/Counter';

class App extends Component {
  state = { isLoggedIn: false }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        <h1>Hello World</h1>
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>}
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