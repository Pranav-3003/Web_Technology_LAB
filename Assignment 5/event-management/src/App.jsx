import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import Registration from './pages/Registration';
import Login from './pages/Login';
import StudentRegistration from './pages/StudentRegistration';
import './App.css';

function App() {
  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/register/:id" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student-register" element={<StudentRegistration />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
