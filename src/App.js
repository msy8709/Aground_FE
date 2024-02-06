import React from "react";
import ReactDOM from "react-dom";
import { Route ,Routes, BrowserRouter} from 'react-router-dom';
import MainPage from "./Pages/MainPage/MainPage";
import LoginPage from "./Pages/Login/LoginPage";
import KSigninPage from "./Pages/Signin/KSigninPage";
import GSigninPage from "./Pages/Signin/GSigninPage";
import ASigninPage from "./Pages/Signin/ASigninPage";
import ALMainPage from "./Pages/MainPage/ALMainPage";
import WelcomeSignUpPage from "./Pages/Signin/WelcomeSignUpPage";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/KSigninPage" element={<KSigninPage />} />
        <Route path="/GSigninPage" element={<GSigninPage />} />
        <Route path="/ASigninPage" element={<ASigninPage />} />
        <Route path="/ALMainPage" element={<ALMainPage />} />
        <Route path="/WelcomeSignUpPage" element={<WelcomeSignUpPage />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
