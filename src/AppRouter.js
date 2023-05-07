//Utilizzo la libreria react-router-dom per implementare la navigazione tra le pagine.
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Listings from './pages/Listings';
import ListingForm from './components/ListingForm';
import ListingCard from './components/ListingCard';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route path="/" component={Dashboard} exact />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/listings" component={Listings} />
                    <Route path="/listing-form" component={ListingForm} />
                    <Route path="/listing-card" component={ListingCard} />
                    {/* Aggiungi ulteriori rotte qui, se necessario */}
                </Switch>
            </main>
            <Footer />
        </Router>
    );
};

export default AppRouter;
