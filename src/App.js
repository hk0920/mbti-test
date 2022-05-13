import './App.css';
import {Routes, Route} from 'react-router-dom';
import Main from './Page/index'; 
import Result from './Page/result';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Main />}></Route>
      <Route index path="/result/:key" element={<Result />}></Route>
    </Routes>
  );
}

export default App;
