import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import Title from './components/Title';
import ItemListContainer from './components/ItemListContainer';



/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}*/

function App() {
  return (
    <div className='App'>

      <>
        <Navbar />
        <ItemListContainer />
  
      </>
      </div>
  )
  }
export default App;



