import "./App.css";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Components/Home/Home";
import Latest from "./Components/Latest/Latest";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/About/About";
import Faq from "./Components/Faq/Faq";
// import { NotFound } from "http-errors";
import NotFound from "./Components/NotFound/NotFound";
import UserDetails from "./Components/UserDetails/UserDetails";
import PostDetails from "./Components/Posts/Post/PostDetails/PostDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/post/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route path="/latest">
            <Latest></Latest>
          </Route>
          <Route path="/latestUser/:userId">
            <UserDetails></UserDetails>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/Faq">
            <Faq></Faq>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
