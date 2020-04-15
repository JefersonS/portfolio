import React from 'react';
import { Intro } from './components/intro';
import { Experiences } from './components/experiences';
import { Contact } from './components/contact';
import { Switch, Route } from 'react-router-dom';
import { profile, experiences } from './info.json';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Intro profile={profile} />
      </Route>
      <Route path='/experience'>
        <Experiences experiences={experiences} intro={profile.experienceIntro} />
      </Route>
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}

export default App;
