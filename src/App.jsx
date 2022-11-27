import React from 'react';
import { PureComponent } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Accueil from './pages/Accueil'
import APropos from './pages/APropos'
import Erreur from './pages/Erreur'
import Logement from './pages/Logement'

import './styles/style.css';

export default class App extends PureComponent {
    //Mise en place du sytème de chargement de la page et de récupération des données sur les logements
    constructor() {
        super();
        this.state = {
            loading: true,
            logementsData: [],
        };
    }

    //Récupération des données et mise à jour du statut de chargement
    componentDidMount() {
        fetch(`${window.origin}/logements.json`)
            .then((res) => res.json())
            .then((data) => this.setState({ logementsData: data }))
            .catch((e) => console.log('error: ' + e));
        setTimeout(() => {
            this.setState({ loading: false });
        }, 3000);
    }

    render() {
        //ligne 45 affichage de la page de chargement quand cela est pertinant
        //ligne 46 à 55 Router de l'application
        //const récupérants les données des logements et le statut de chargement de la page
        const { loading } = this.state;
        const { logementsData } = this.state;
        return (
            <div className="divApp">
                <div>
                    {loading && (<div className='loader-wrapper'> <div className='loader'> <div/> <div/> <div/> </div> </div>)}
                    <Router forceRefresh={false}>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Accueil logementsData={logementsData} />} />
                            <Route path="/logement/:id" element = {<Logement logementsData={logementsData}/>} />
                            <Route path="/a_propos" element={<APropos />} />
                            <Route path="*" element={<Erreur code="404"/>} />
                        </Routes>
                        <Footer />
                    </Router>
                </div>
            </div>
        );
    }
}