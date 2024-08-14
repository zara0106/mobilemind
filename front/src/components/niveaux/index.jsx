import { Icon } from "@iconify/react";
import React from 'react';
import './niveaux.css';

function Niveaux(){
    return(
        <div>
            <p className="niveau_page">Niveau L1</p>
            <div className="niveau">
                <div className="niveau_date">
                    <Icon icon="circum:calendar" className="niveau_icon"/>
                    <p className="niveau_paragraphe">Date: 03/02/2024</p>
                </div>
                <div className="niveau_scolaire">
                    <Icon icon="ph:graduation-cap-thin" className="niveau_icon"/>
                    <p className="niveau_paragraphe">Annee scolaire: 2023-2024</p>
                </div>
            </div>
            <div className="niveau_filiere">
                <p className="niveau_border">Informatique Statistique appliquee et l'Intelligence Artificielle</p>
                <p className="niveau_paragraphe">Informatique Gestion, Genie Logiciel</p>
            </div>
        </div>
    )
}

export default Niveaux;
