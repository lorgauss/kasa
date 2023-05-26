import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import chevron from '../../assets/chevron.svg';

export default class Collapse extends PureComponent {
    render() {
        //Récupération des données dans les const
        const { id } = this.props;
        const { classElement } = this.props;
        const { title } = this.props;
        const { content } = this.props;

        //Fonction retournant le code html approprié à l'ouverture/fermeture d'un Collapse
        const openDivCollapse = () => {
            let divElementImg = document.querySelector(`#${id} > p > img`);
            let divElementDiv = document.querySelector(`#${id} > div`);

            //Si le Collapse est fermé
            if (divElementImg.alt === 'Déployer') {
                divElementImg.alt = 'Réduire';
                divElementImg.style.transform = 'rotate(90deg)';
                divElementDiv.style.paddingTop = '20px';
                if (window.innerWidth >= 768 && window.innerWidth < 1440) {
                    divElementDiv.style.paddingBottom = '20px';
                    divElementDiv.style.height = '128px';
                } else if (window.innerWidth >= 1440) {
                    divElementDiv.style.paddingBottom = '30px';
                    divElementDiv.style.height = '200px';
                } else {
                    divElementDiv.style.paddingBottom = '5px';
                    divElementDiv.style.height = 'initial';
                }
            //Si le Collapse est ouvert
            } else {
                divElementImg.alt = 'Déployer';
                divElementImg.style.transform = 'rotate(270deg)';
                divElementDiv.style.height = '0px';
                divElementDiv.style.paddingTop = '0px';
                divElementDiv.style.paddingBottom = '0px';
            }
        };

        //Création d'un collapse avec les données appropriées
        return (
            <div id={id} className={classElement}>
                <p onClick={() => openDivCollapse()}>
                    {title}
                    <img src={chevron} alt="Déployer" />
                </p>
                <div>
                    {typeof content === 'string' ? (
                        <p>{content}</p>
                    ) : (
                        content.map((equipment, index) => ( <p key={index}>{equipment}</p> ))
                    )}
                </div>
            </div>
        );
    }
}

//Précision de l'aspect required sur la prop transmise
Collapse.propTypes = {
    id: PropTypes.string.isRequired,
    classElement: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};