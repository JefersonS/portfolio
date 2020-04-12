import React from 'react';
import { Intro } from './components/intro';
import { Experiences } from './components/experiences';
import { Contact } from './components/contact';
import { Switch, Route } from 'react-router-dom';

const experiences = [
  {
    id: 1,
    name: 'abc'
  }
]

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Intro} />
      <Route path='/experience'>
        <Experiences experiences={experiences}/>
      </Route>
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}

export default App;
