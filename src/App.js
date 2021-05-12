import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import { Home } from './components/Home';
import { LoggedInHomePage } from './components/LoggedInHomePage';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/loggedin-home-page">
          <LoggedInHomePage />
        </Route>
        <Route path="/">
          <Home userLoggedIn={false}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
