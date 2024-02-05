import './App.css';
import { Component } from 'react';
import Welcome from './components/Welcome';
// import Counter from './components/Counter';

class App extends Component {
  state = { isLoggedIn: true }

  render() {
    const {isLoggedIn} = this.state;
    return (
      <div>
        <h1>Hello World</h1>
        <Welcome/>
        <Welcome name="Venkat" greeting="Good Morning"/>
        {isLoggedIn && <button>Logout</button>}
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