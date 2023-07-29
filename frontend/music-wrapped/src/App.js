import Home from './components/Home';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
            <Routes>
                <Route exact path='/' Component={<Home/>}/>
            </Routes>
        </BrowserRouter> */}
      <Home/>
    </div>
  );
}

export default App;
