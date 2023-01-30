import './App.css';
import { Routes, Route } from 'react-router-dom'
import StarShipList from './pages/StarshipList/StarShipList';
import StarShipDetails from './pages/StarshipDetails/StarShipDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<StarShipList/>}/>
        <Route path='starship' element={<StarShipDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
