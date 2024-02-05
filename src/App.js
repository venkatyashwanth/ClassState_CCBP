import './App.css';
import { Component } from 'react';
// import Counter from './components/Counter';

class App extends Component {
  state = { isLoggedIn: true }

  render() {
    const {isLoggedIn} = this.state;
    let authBtn;
    if(isLoggedIn === true){
      authBtn = <button>Logout</button>
    }else{
      authBtn = <button>Login</button>
    }

    return (
      <div>
        <h1>Hello World</h1>
        {authBtn}
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