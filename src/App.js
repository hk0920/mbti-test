import './App.css';
import {Routes, Route} from 'react-router-dom';
import Main from './Page/index'; 

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Main />}></Route>
      {/* <Route index path="/:type" element={<Main type={"canvas"}/>}></Route> */}
    </Routes>
  );
}

export default App;
