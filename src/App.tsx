import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import "./App.css";
import "./index.css";
import LandingPage from "./Components/Background/Pages/LandingPage";
import DottedBackground from "./Components/Background/DottedBackground/DottedBackground";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/Background/Pages/About";
import Work from "./Components/Background/Pages/Work";
import Photography from "./Components/Background/Pages/Photography";
import Resume from "./Components/Background/Pages/Resume";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <Router>
      <div className="relative w-full h-screen">
        {/* 3D Background Layer */}
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 50,
              near: 0.1,
              far: 1000,
            }}
          >
            <color attach="background" args={["white"]} />
            <ambientLight intensity={0.3} />
            <DottedBackground />
            {/* <Text3D /> */}
          </Canvas>
        </div>

        {/* Website Content Layer */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "1rem",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            pointerEvents: "none",
          }}
        >
          {/* Navigation */}
          <Navigation />
          {/* Routes */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
