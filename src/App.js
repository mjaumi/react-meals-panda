import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Restaurant from './components/Restaurant/Restaurant';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/restaurant' element={<Restaurant />}></Route>
      </Routes>
    </div>
  );
}

export default App;
