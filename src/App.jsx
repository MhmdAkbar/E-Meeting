// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import halaman-halaman awal
import Login from './pages/user/Login';
import Register from './pages/user/Register';
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* USER ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin/dashboard" element={<Dashboard />} />

        {/* Tambahkan halaman lainnya nanti */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
