import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.scss';
import Header from '../header/Header';
import Counters from '../counters/Counters';
import Display from '../display/display';


export default function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Counters />
        <Display />
      </Routes>
    </div>
  );
}

