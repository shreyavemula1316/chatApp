import Login from "./pages/login/Login.js";
import SignUp from "./pages/signup/SignUp.js";
import Home from "./pages/home/Home.js";
import "./App.css";
import { Navigate,Route, Routes } from "react-router-dom";
import {Toaster } from 'react-hot-toast';
import { useAuthContext } from "./context/AuthContext.js";

function App() {
  const {authUser} = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
     <Routes>
      <Route path="/" element= {authUser ? <Home />: <Navigate to ={"/login"} />}/>
      <Route path="/login" element= {authUser ? <Navigate to ="/"/> : <Login />}/>
      <Route path="/signup" element= {authUser ? <Navigate to ="/"/> : <SignUp />}/>
     </Routes>
     <Toaster />
    </div>
  );
}
export default App;
