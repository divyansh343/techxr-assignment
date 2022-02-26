import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer-component/Footer.component';
import Header from './components/Header-compnent/Header.component';
import Courses from './pages/Courses';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='main'>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/courses" element={<Courses />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
