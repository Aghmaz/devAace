import "./App.css";
import "./app.scss";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
// import Protectedroute from "./ProtectedRoute";
import { useEffect, useState } from "react";
import Test from "./components/Test";
import Team from "./components/Team";
import OurStory from "./components/OurStory";

function App() {
  // Check If User is Logged In
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch("/auth", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (res.status === 200) {
        setauth(true);
        setauth1(false);
      }
      if (res.status === 401) {
        setauth(false);
        setauth1(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <>
      <Navbar auth={auth1} />
      <Routes>
        <Route exact path="/" element={<Test />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/ourstory" element={<OurStory />} />
        <Route exact path="/service" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/team" element={<Team />} />
        <Route
          exact
          path="/dashboard"
          element={
            auth ? <Dashboard /> : <Navigate to="/login" replace={true} />
          }
        />
        <Route
          path="/login"
          element={
            auth1 ? <Login /> : <Navigate to="/" state={{ from: "/login" }} />
          }
        />
        <Route
          path="/register"
          element={
            auth1 ? (
              <Register />
            ) : (
              <Navigate to="/" state={{ from: "/register" }} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            auth ? (
              <Dashboard />
            ) : (
              <Navigate to="/" state={{ from: "/dashboard" }} />
            )
          }
        />
        <Route
          path="/logout"
          element={
            auth ? <Logout /> : <Navigate to="/" state={{ from: "/logout" }} />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
