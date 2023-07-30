import Details from './components/Details/Details.js';
import Home from './components/Home/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path='/' Component={Home}/>
                <Route path="/wrapped" Component = {Details}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
