import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './components/button/button'
import Title from './components/title/title'
import Tasks from './components/tasks/tasks'
import TaskList from './pages/taskList/taskList.js'
import TimerPage from './pages/timer_page/timer_page'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
           <Route exact path = '/' component={TaskList}/>
           <Route path="/tasklist" component={TaskList} />
           <Route path="/timer" component={TimerPage} />

        </Switch>
      </div>
    );
  }
}

export default App;
