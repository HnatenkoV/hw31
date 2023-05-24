import './App.css';
import UserHookEpisode from "./compotents/userHookEpisode"
import UserHookHeroes from "./compotents/userHookHeroes";
import HomePage from "./pages/homePage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./compotents/header";
import React from "react";
import Hero from "./compotents/hero";


function App() {

  return (
      <div>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/heroes" element={<UserHookHeroes />}>
              <Route path="hero/:id" element={<Hero/>} />
            </Route>
            <Route path="/episodes" element={ <UserHookEpisode />} />
          </Routes>
        </BrowserRouter>

      </div>
  );
}

export default App;
