import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Alemanha from './pages/Alemanha'

import Austria from './pages/Austria'

import Algarve from './pages/Algarve';

import Belgica from './pages/Belgica'

import Espanha from './pages/Espanha'

import Franca from './pages/Franca'
import Home from './pages/Home';

import Inglaterra from './pages/Inglaterra'

export default function Routes() {
    return (
        <Switch>
            <Route path="/alemanha" exact component={Alemanha} />

            <Route path="/austria" exact component={Austria} />
            <Route path="/belgica" exact component={Belgica} />
            <Route path="/espanha" exact component={Espanha} />
            <Route path="/franca" exact component={Franca} />
            <Route path="/home" exact component={Home} />
            <Route path="/inglaterra" exact component={Inglaterra} />
            <Route path="/italia" exact component={Italia} />
            <Route path="/paisesbaixos" exact component={PaisesBaixos} />
            <Route path="/suica" exact component={Suica} />
            <Route path="/portugal" exact component={Portugal} />



            

        </Switch>
    );
}