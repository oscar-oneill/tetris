import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Tetris from './Components/Tetris'
import Home from './Routes/Home';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/game" component={Tetris}/>
      </Router>
    </div>
  );
}

export default App;
