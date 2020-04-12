import React from 'react';
import { Intro } from './components/intro';
import { Experiences } from './components/experiences';
import { Contact } from './components/contact';
import { Switch, Route } from 'react-router-dom';
import profileData from './info.json';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Intro profile={profileData.profile}/>
      </Route>
      <Route path='/experience'>
        <Experiences experiences={profileData.experiences}/>
      </Route>
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}

export default App;
