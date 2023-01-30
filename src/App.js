import './App.css';
import { Routes, Route } from 'react-router-dom'
import StarShipList from './pages/StarShipList';
import StarShipPage from './pages/StarShipPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='starship' element={<StarShipPage/>}/>
        <Route path='/' element={<StarShipList/>}/>
      </Routes>
    </div>
  );
}

export default App;
