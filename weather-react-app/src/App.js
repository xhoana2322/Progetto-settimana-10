import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import MyNavbar from './components/MyNavbar'

function App() {
  return (
    <>
    <BrowserRouter>
    <MyNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
