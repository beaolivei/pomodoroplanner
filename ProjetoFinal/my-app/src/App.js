import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './components/button/button'
import Title from './components/title/title'
import Tasks from './components/tasks/tasks'
import TaskList from './pages/taskList/taskList.js'
import LandingPage from './pages/landingpage/landingpage'
import TimerPage from './pages/timer_page/timer_page'
import InsertData from './pages/insertdata/insertdata'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Congrats from './pages/congrats/congrats';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
           <Route exact path = '/' component={LandingPage}/>
           <Route path="/tasklist" component={TaskList} />
           <Route path="/timer" component={TimerPage} />
           <Route path='/insertdata' component={InsertData}/>
           <Route path='/congrats' component={Congrats}/>

        </Switch>
      </div>
    );
  }
}

export default App;
