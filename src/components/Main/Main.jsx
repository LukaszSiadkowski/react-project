import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import PsyNewsPage from './Merkel/PsyNewsPage';
import HelpPage from './HelpPage/HelpPage';
import ContactPage from '../Footer/ContactPage'


const Main = () => (

    <main>
        <Switch>
            <Route exact path='/'>
                <HomePage />
            </Route>
            <Route exact path='/psy'>
                <PsyNewsPage />
            </Route>
            <Route exact path='/help'>
                <HelpPage />
            </Route>
            <Route exact path='/contact'>
                <ContactPage />
            </Route>
        </Switch>
    </main>


);


export default Main;