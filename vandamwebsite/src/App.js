import React from "react";
import './App.css';
import NavigationBar from './components/NavigationBar';
import LottieSection from './components/LottieSection';
import FirstSection from './components/FirstSection';
import SecondSection from "./components/SecondSection";

function App() {



  return (
    <div className="App">
    <NavigationBar />
    <LottieSection />
    <SecondSection/>
    <FirstSection />

    </div>
  );
}

export default App;
