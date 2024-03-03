import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./componenets/Signin";
import Account from "./componenets/Hero/Account";
import Signup from "./componenets/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./componenets/ProtectedRoute";
import About from "./pages/AboutUs";

function App() {
  return (
    <div>
     

      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
          } 
          />
        </Routes>
      </AuthContextProvider>

    </div>
  );
}

export default App;
