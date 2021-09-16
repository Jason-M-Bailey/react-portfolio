import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Project from "./pages/Projects";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Router>
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/projects" component={Project} />
        <Footer />
      </Router>
    </main>
  );
}
