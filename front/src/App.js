import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      
    </Routes>
  );
    

}

export default App;
