import { AuthProvider } from '../hooks/useAuth';
import Login from './Login';
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import RequireAuth from './RequireAuth';

function App() {
  return (
    <div className="h-screen w-screen">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<RequireAuth><Dashboard /></RequireAuth>} />
            <Route path="/login" element={<RequireAuth required={false}><Login /></RequireAuth>} />
            <Route path="/signup" element={<RequireAuth required={false}><SignUp /></RequireAuth>} />
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
