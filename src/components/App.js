import { AuthProvider } from '../hooks/useAuth';
import Login from './Login';

function App() {
  return (
    <AuthProvider>
      <div className="h-screen w-screen">
        <Login />
      </div>
    </AuthProvider>
  );
}

export default App;
