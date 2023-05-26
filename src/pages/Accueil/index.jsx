import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Erreur from '../Erreur';
import Thumb from '../../components/desktop/Thumb';

import accueilImg from '../../assets/accueil.jpg';

export default class Accueil extends PureComponent {
    render() {
        //récupération des données des logements
        const { logementsData } = this.props;
        //Retour en haut de la page et changement aproprié du texte de l'onglet
        window.scrollTo(0, 0);
        window.document.title = 'Kasa - leaders de la location d’appartements entre particuliers en France';
        //Création des éléments de la page d'accueil et ligne 29 créations des cards logement (thumb)
        //ligne 31 affichage d'une erreur 504 si aucune information logement n'a été reçue
        return (
            <main className="mainHome">
                <section>
                    <article tabIndex="0">
                        <img src={accueilImg} alt="Paysage de montagne" />
                        <h2>
                            Chez vous, <span>partout et ailleurs</span>
                        </h2>
                    </article>
                    <div>
                        {logementsData.length > 0 ? ( 
                            logementsData.map(({ id, cover, title }) => ( <Thumb key={id} id={id} cover={cover} title={title} /> ))
                        ) : ( 
                            <Erreur code="504" />
                        )}
                    </div>
                </section>
            </main>
        );
    }
}

//Précision de l'aspect required sur la prop transmise
Accueil.propTypes = {
    logementsData: PropTypes.array.isRequired,
};