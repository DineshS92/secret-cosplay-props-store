import React from 'react';
import './App.css';
import HomePage from './pages/homepage/home.component';
import {Route, Switch} from 'react-router-dom';

const hatsPage = () => (
  <h1>This is Hats Page</h1>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={hatsPage}/>
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
