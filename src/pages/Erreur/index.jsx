import { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Error extends PureComponent {
    //Récupération du code erreur approprié
    constructor(props) {
        super(props);
        this.state = {
            code: this.props.code,
        };
    }

    render() {
        //const récupérants les code erreur
        const { code } = this.props;
        let messageError;
        //Création du message d'erreur approprié suivant le code transmit
        if (code === '404') {
            messageError = "Oups! La page que vous demandez n'existe pas.";
        } else {
            messageError = "Oups! Le serveur n'a pas répondu.";
        }
        //Changement aproprié du texte de l'onglet
        window.document.title = `${code} - ${messageError}`;
        
        //Création de l'affichage de l'erreur et possibilité de retourner à l'accueil grace au NavLink
        return (
            <div className="divError">
                <h2>{code}</h2>
                <p>{messageError}</p>
                <NavLink to="/">
                    Retourner sur la page d’accueil
                </NavLink>
            </div>
        );
    }
}

//Précision de l'aspect required sur la prop transmise
Error.propTypes = {
    code: PropTypes.string.isRequired,
};