import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Advantages from "./components/Advantages/Advantages";
import Estimate from "./components/Estimate/Estimate";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import "@fontsource/montserrat";

function App() {
  const resultRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header resultRef={resultRef} />
      <Advantages />
      <Estimate ref={resultRef} />
      <Footer />
    </>
  );
}

export default App;
