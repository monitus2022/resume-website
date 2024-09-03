import './css/App.css';
import HomePage from './pages/homepage';
import Ffxiv from './pages/ffxiv';
import Learning from './pages/learning';
import Experimental from './pages/experimental';
import AboutMe from './pages/aboutme';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/ffxiv" element={<Ffxiv />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/experimental" element={<Experimental />} />
        <Route path="/aboutme" element={<AboutMe />} />        
      </Routes>
    </div>
  );
}

export default App;
