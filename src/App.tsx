import { Routes, Route } from 'react-router-dom';
import MainPage from './pages';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="characters/:id"  />
      </Routes>
    </>
  );
}

export default App;
