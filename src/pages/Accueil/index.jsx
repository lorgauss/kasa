import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Erreur from '../Erreur';
import Thumb from '../../components/desktop/Thumb';

import accueilImg from '../../assets/accueil.jpg';
import '../../styles/style.css';

export default class Accueil extends PureComponent {
    render() {
        const { logementsData } = this.props;
        window.scrollTo(0, 0);
        window.document.title =
            'Kasa - leaders de la location d’appartements entre particuliers en France';
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

Accueil.propTypes = {
    logementsData: PropTypes.array.isRequired,
};