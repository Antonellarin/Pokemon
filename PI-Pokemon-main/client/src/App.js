import './App.css';

import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";
import Create from "./Pages/Create/Create";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";

export default function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== '/' && <NavBar />}
      <Routes>
        <Route exact path='/' element={<Landing/>} />
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/detail/:id'element={<Detail/>} />
        <Route exact path='/create' element={<Create/>} />
        <Route element={<NotFound/>} />
      </Routes>
    </div>
  );
  }
