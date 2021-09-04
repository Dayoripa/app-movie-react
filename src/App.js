import styles from './scss/style/style.module.scss';
import { Movies } from './components/movies/Movies';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Popular } from './components/popular/Popular';
import { TopRated } from './components/topRated/TopRated'; 
import { Upcoming } from './components/upcoming/Upcoming';

function App() {
  return (
    <Router>
       <div className={styles.container}>
          
            <Switch>
              <Route exact path="/popular">
                <Popular />
              </Route>
              <Route exact path="/topRated">
                <TopRated />
              </Route>
              <Route exact path="/upcoming">
                <Upcoming />
              </Route>
              <Route path="/">
                <Movies />
              </Route>
            </Switch>
       
      </div>
    </Router>
     
  )
}

export default App;
