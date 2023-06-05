import React from "react";
import './App.css';
import NavigationBar from './components/NavigationBar';
import LottieSection from './components/LottieSection';
import FirstSection from './components/FirstSection';
import SecondSection from "./components/SecondSection";

function App() {

  const navigateTo = () => {
    const element = document.getElementById("FirstSectionContainer");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="App">
    <NavigationBar/>
    <LottieSection navigateTo={navigateTo}/>
    <FirstSection id="FirstSectionContainer"/>
    <SecondSection/>

    </div>
  );
}

export default App;
