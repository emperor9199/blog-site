import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AllBlogs from "./components/AllBlogs/AllBlogs";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/all-blogs" component={AllBlogs} exact />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
