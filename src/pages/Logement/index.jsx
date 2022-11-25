import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Error from '../Erreur';
import Slideshow from '../../components/desktop/Slideshow';
import Tag from '../../components/desktop/Tag';
import Collapse from '../../components/desktop/Collapse';

import etoile from '../../assets/etoile.svg';
import '../../styles/style.css';

export default class Logement extends PureComponent {
    constructor() {
        super();
        this.state = {
            id: window.location.pathname.substring(10)
        };
    }

    render() {
        window.scrollTo(0, 0);
        const { id } = this.state;
        const { logementsData } = this.props;
        const logementData = logementsData.filter((house) => {
            return house.id === id;
        });
        /**
         * setTitle - change le titre de la page
         * @param  {String} title titre du logement
         */
        const setTitle = (title) => {
            window.document.title = `Kasa - ${title}`;
        };
        /**
         * getRating - Met en forme la note du logement
         * @param  {String} rating note du logement
         * @return {Array} arrayRating contient les notes sous forme HTML
         */
        const getRating = (rating) => {
            let arrayRating = [];
            for (let i = 1; i < 6; i++) {
                let etoileStyle;
                if (i > parseInt(rating)) etoileStyle = 'starGray';
                else etoileStyle = 'starRed';
                arrayRating.push(
                    <span key={i}>
                        <img
                            className={etoileStyle}
                            src={etoile}
                            alt="Note du logement"
                        />
                    </span>
                );
            }
            return arrayRating;
        };

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
                                    {house.tags.map((tag, index) => (
                                        <Tag
                                            key={index}
                                            tag={tag}
                                            index={index}
                                        />
                                    ))}
                                </div>
                                <div className="divRatingAndHost">
                                    <div className="divRating">
                                        {getRating(house.rating)}
                                    </div>
                                    <div className="divHost">
                                        <span>
                                            {house.host.name.split(' ')[0]}
                                            <br />
                                            {house.host.name.split(' ')[1]}
                                        </span>
                                        <img
                                            src={house.host.picture}
                                            alt={house.host.name}
                                        />
                                    </div>
                                </div>
                                <div className="divCollapse">
                                    <Collapse
                                        id={'description'}
                                        classElement={'divDescription'}
                                        title={'Description'}
                                        content={house.description}
                                    />
                                    <Collapse
                                        id={'equipements'}
                                        classElement={'divEquipements'}
                                        title={'Équipements'}
                                        content={house.equipments}
                                    />
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

Logement.propTypes = {
    logementsData: PropTypes.array.isRequired,
};