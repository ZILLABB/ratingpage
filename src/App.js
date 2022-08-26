import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Ratings from './components/Ratings';
import SubmitPage from './components/SubmitPage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ratings />}/>
            <Route path="/submit" element={<SubmitPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
