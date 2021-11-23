import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import CardList from "./pages/CardList";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
        <Route path="/cardlist" component={CardList} />
      </Switch>
    </Router>
  );
}
export default App;
