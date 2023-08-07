import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainWrapper from './MainWrapper.tsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainWrapper />} />
      </Routes>
    </Router>
  );
}
