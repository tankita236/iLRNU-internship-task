import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Home } from './Home';
import { LoggedInHomePage } from './LoggedInHomePage';
import { EventSection } from './EventSection';
import { CourseSection } from './CourseSection';
import { TutorSection } from './TutorSection';


export function HomePage() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/loggedin-home-page">
                        <LoggedInHomePage />
                    </Route>
                    <Route path="/">
                        <Home userLoggedIn={false} />
                    </Route>
                </Switch>
            </Router>
            <TutorSection />
            <EventSection />
            <CourseSection />
        </div>
    )
}