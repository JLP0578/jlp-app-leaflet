import React, {useReducer} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Map from './Components/Map'
import Menu from './Components/Menu'
import List from "./Components/List";
import User from "./Components/User";

import MapReducer from "./Reducers/MapReducer";
import MapContext from "./Contexts/MapContext";

function App() {
    const [state, dispatch] = useReducer(MapReducer, {markers: []})
    const context = { state, dispatch }

    //console.log(state)

  return (
      <MapContext.Provider value={context}>
              <Router>
                  <Switch>
                      <Route path="/Map">
                          <Map />
                      </Route>
                      <Route path="/List">
                          <List />
                      </Route>
                      <Route path="/User">
                          <User />
                      </Route>
                  </Switch>
              </Router>
      </MapContext.Provider>
  );
}

export default App;
