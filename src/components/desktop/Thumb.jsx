import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default class Thumb extends PureComponent {
    render() {
        //const récupérants les données de la prop transmise
        const { id } = this.props;
        const { cover } = this.props;
        const { title } = this.props;
        //Création de la card logement avec les données transmises et redirection vers la page logement appropriée grace au NavLink
        return (
            <article tabIndex="0" className="housing" key={id}>
                <NavLink to={`/logement/${id}`}>
                    <img src={cover} alt={title} />
                    <h2>{title}</h2>
                </NavLink>
            </article>
        );
    }
}

//Précision de l'aspect required sur la prop transmise
Thumb.propTypes = {
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};