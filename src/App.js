import './App.css';
import './index.css';
import RequireAuth from './Routing/RequiredAuth';
import Dashboard from './main/Pages/Dashboard'
import Login from './main/Pages/sign-in/SignInPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <PrivateRoute path="/dashboard" element={<Dashboard />} /> */}
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
              <Dashboard />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
