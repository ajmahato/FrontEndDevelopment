import React from 'react';
import classes from './App.module.css';
import CustomRoute from './Components/CustomRoute';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
//import Home from './Home';
import TicTacToe from './TicTacToe';
import ToDo from './ToDo';
import Counter from './Counter';
const App = () => {

  return (
    <Provider store={store}>
      <HashRouter>
        <div className={classes.App}>
          <Switch>
          <CustomRoute path="/TicTacToe" component={TicTacToe} />
            <CustomRoute path="/ToDo" component={ToDo} />
            <CustomRoute path="/Counter" component={Counter} />
            <Route path="/">
            <CustomRoute path="/TicTacToe" component={Counter} />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
