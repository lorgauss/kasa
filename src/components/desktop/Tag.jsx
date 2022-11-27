import { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Tag extends PureComponent {
    render() {
        //Récupération des données dans les const
        const { index } = this.props;
        const { tag } = this.props;
        //Création des tag avec les données appropriées
        return (
            <span className="tag" key={index}>
                {tag}
            </span>
        );
    }
}

//Précision de l'aspect required sur la prop transmise
Tag.propTypes = {
    index: PropTypes.number.isRequired,
    tag: PropTypes.string.isRequired,
};