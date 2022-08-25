import { AuthProvider } from '../hooks/useAuth';
import Login from './Login';
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="h-screen w-screen">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="*"
              element={
                <main>
                  <p>404</p>
                </main>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div >
  );
}

export default App;
