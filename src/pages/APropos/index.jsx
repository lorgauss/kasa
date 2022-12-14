import { Component } from 'react';
import Collapse from '../../components/desktop/Collapse';

import imgAPropos from '../../assets/apropos.jpg';

export default class APropos extends Component {
    render() {
        //Retour en haut de la page et changement aproprié du texte de l'onglet
        window.scrollTo(0, 0);
        window.document.title = 'Kasa - leaders de la location d’appartements entre particuliers en France';
        //Création de la page à propos avec les différents éléments Collapse avec les données appropriées
        return (
            <main className="mainAbout">
                <section>
                    <div className="divImgApropos">
                        <img src={imgAPropos} alt="Paysage de montagne" />
                    </div>
                    <div className="divCollapse">
                        <Collapse id={'fiabiliter'} classElement={'divAbout'} title={'Fiabilité'} content={ 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'}/>
                        <Collapse id={'respect'} classElement={'divAbout'} title={'Respect'} content={ 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}/>
                        <Collapse id={'service'} classElement={'divAbout'} title={'Service'} content={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}/>
                        <Collapse id={'securiter'} classElement={'divAbout'} title={'Sécurité'} content={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}/>
                    </div>
                </section>
            </main>
        );
    }
}