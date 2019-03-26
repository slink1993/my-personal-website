import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Hobbies from './pages/Hobbies';
import Skills from './pages/Skills';
import WorkExperience from './pages/WorkExperience'

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/about" component={About}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/workexperince" component={WorkExperience}/>
        <Route path="/hobbies" component={Hobbies}/>
    </Switch>
)

export default Main;