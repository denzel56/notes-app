import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NotePage from './pages/NotePage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="note/:id" element={<NotePage />} />
      </Routes>
    </>
  );
}

export default App;
