import React from "react";
import styles from "./App.Module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MoviesGrid } from "./components/MoviesGrid.jsx";
import { MovieDetails } from "./pages/MovieDetails.jsx";
import { LandingPage } from "./pages/LandingPage.jsx";

export default function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>MOVIES</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route path="/movies/:movieId"><MovieDetails/></Route>
          <Route path="/"><LandingPage/></Route>
        </Switch>
      </main>
    </Router>
  );
}
