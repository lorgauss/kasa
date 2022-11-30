import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Error from '../Erreur';
import Slideshow from '../../components/desktop/Slideshow';
import Tag from '../../components/desktop/Tag';
import Collapse from '../../components/desktop/Collapse';

import etoile from '../../assets/etoile.svg';

export default class Logement extends PureComponent {
    //Récupération de l'id du logement à afficher récupérer grace au chemin de l'url
    constructor() {
        super();
        this.state = {
            id: window.location.pathname.substring(10)
        };
    }

    render() {
        //Retour en haut de la page et changement aproprié du texte de l'onglet
        window.scrollTo(0, 0);
        //Récupération dans des constantes des données transmises (prop) et calculée (constructor)
        const { id } = this.state;
        const { logementsData } = this.props;
        //Récupération des données du logement approprié grace à son id
        const logementData = logementsData.filter((house) => {return house.id === id});

        //Fonction permettant de changer le texte de l'onglet
        const setTitle = (title) => { window.document.title = `Kasa - ${title}`;};

        //Fonction transformant le rating numérique sous forme de rating avec des étoiles le tout au format html
        const getRating = (rating) => {
            let arrayRating = [];
            for (let i = 1; i < 6; i++) {
                let etoileStyle;

                if (i > parseInt(rating)) etoileStyle = 'starGray';
                else etoileStyle = 'starRed';

                arrayRating.push(
                    <span key={i}>
                        <img className={etoileStyle} src={etoile} alt="Note du logement" />
                    </span>
                );
            }
            return arrayRating;
        };

        //Création de la page logement grace au components Slideshow et Collapse
        //Chaque élément contient le contenu approprié grace au données précédement récupérées
        //lignes 56 & 84 Si il n'y a pas de données trouvées on affiche une erreur 404
        return (
            <main className="mainHousing">
                <section>
                    {logementData.length > 0 ? (
                        logementData.map((house) => (
                            <article key={house.id}>
                                {setTitle(house.title)}
                                <Slideshow pictures={house.pictures} />
                                <h2>{house.title}</h2>
                                <h3>{house.location}</h3>
                                <div className="divTags">
                                    {house.tags.map((tag, index) => (<Tag tag={tag} index={index} />))}
                                </div>
                                <div className="divRatingAndHost">
                                    <div className="divRating">
                                        {getRating(house.rating)}
                                    </div>
                                    <div className="divHost">
                                        <span>
                                            {house.host.name.split(' ')[0]}  <br /> {house.host.name.split(' ')[1]}
                                        </span>
                                        <img src={house.host.picture} alt={house.host.name} />
                                    </div>
                                </div>
                                <div className="divCollapse">
                                    <Collapse id={'description'} classElement={'divDescription'} title={'Description'} content={house.description} />
                                    <Collapse id={'equipements'} classElement={'divEquipements'} title={'Équipements'}  content={house.equipments} />
                                </div>
                            </article>
                        ))
                    ) : (
                        <Error code="404" />
                    )}
                </section>
            </main>
        );
    }
}

//Précision de l'aspect required sur la prop transmise
Logement.propTypes = {
    logementsData: PropTypes.array.isRequired,
};