import React, { PureComponent } from 'react';
import chevron from '../../assets/chevron.svg';
import PropTypes from 'prop-types';

export default class Slideshow extends PureComponent {
    render() {
        const { pictures } = this.props;

        //Fonction permettant de naviguée dans la gallerie suivant l'action transmise "Next" or "Previous"
        const controlSlideShow = (action) => {
            //span indiquant l'image sur laquelle la gallerie se trouve
            let spanActive = document.querySelector('.slidePictures > span');
            //image actuellement affichée
            let pictureActive = document.querySelector('.slidePictures > img');
            //indice de l'image dans l'array des images
            let idPicture = parseInt(pictureActive.id);
            //Si on veut passer à l'image suivante
            if (action === 'Next') {
                //Si l'image n'est pas la dernière de l'array
                if (pictures.length - 1 > idPicture) {
                    pictureActive.id = `${idPicture + 1}`;
                    pictureActive.style.opacity = '0';
                    pictureActive.src = pictures[idPicture + 1];
                    pictureActive.style.opacity = '1';
                    spanActive.innerHTML = `${idPicture + 2}/${pictures.length}`;
                //Si l'image est la dernière de l'array
                } else {
                    pictureActive.id = '0';
                    pictureActive.style.opacity = '0';
                    pictureActive.src = pictures[0];
                    pictureActive.style.opacity = '1';
                    spanActive.innerHTML = `1/${pictures.length}`;
                }
            //Si on veut passer à l'image précédente
            } else if ('Previous') {
                //Si l'image n'est pas la première de l'array
                if (idPicture !== 0) {
                    pictureActive.id = `${idPicture - 1}`;
                    pictureActive.style.opacity = '0';
                    pictureActive.src = pictures[idPicture - 1];
                    pictureActive.style.opacity = '1';
                    spanActive.innerHTML = `${idPicture}/${pictures.length}`;
                //Si l'image est la première de l'array
                } else {
                    pictureActive.id = `${pictures.length - 1}`;
                    pictureActive.style.opacity = '0';
                    pictureActive.src = pictures.slice(-1);
                    pictureActive.style.opacity = '1';
                    spanActive.innerHTML = `${pictures.length}/${pictures.length}`;
                }
            }
        };

        //Affichage de la galerie et utilisation de ControlSlideshow
        return (
            <div className="slideShow">
                {pictures.length > 1 && (
                    <div className="slideControl">
                        <img className="previous" src={chevron} alt="Previous" onClick={() => controlSlideShow('Previous')}/>
                        <img className="next" src={chevron} alt="Next" onClick={() => controlSlideShow('Next')}/>
                    </div>
                )}
                <div className="slidePictures">
                    <span>1/{pictures.length}</span>                    
                    <img id="0" src={pictures[0]} alt="Logement Kasa" />
                </div>
            </div>
        );
    }
}

//Précision de l'aspect required sur la prop transmise
Slideshow.propTypes = {
    pictures: PropTypes.array.isRequired,
};

